import React from 'react';
import {App, Sphere} from '../../../src/index';
import {MeshBasicMaterial} from 'three';
import {SceneModule, CameraModule, RenderingModule} from 'whs/src/modules/app/export';
import {OrbitModule} from 'whs/src/modules/controls/export';
import * as Animated from "animated/lib/targets/react-dom";
import TWEEN from 'tween';

export class Background extends React.Component {
  constructor(props) {
    super(props);
    const spheres = new Array(100).fill(0);


    const myCamera = new CameraModule({
      position: {
        z: Math.random() * 800 - 400
      },
      rotation: {
        x: Math.random() * 800 - 400,
        y: Math.random() * 800 - 400,
        z: Math.random() * 800 - 400
      }
    });

    this.state = {
      spheres: spheres,
      opacity: 0.5,
      position: Math.random() * 800 - 400,
      color: Math.random() * 0xffffff,
      geometry: [3, 35, 35],
      positionZ: Math.random() * 800 - 400,
      cameraModule: myCamera
    }
  }

  componentDidMount() {
    this.startPolling();
  }

  componentWillUnmount() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }

  startPolling() {
    const self = this;
    setTimeout(function () {
      self.poll(); // do it once and then start it up ...
      self._timer = setInterval(self.poll.bind(self), 15000);
    }, 1000);
  }

  componentDidMount() {

    let camera = this.state.cameraModule.camera,
      position = camera.position,
      xPos = position.x,
      yPos = position.y,
      zPos = position.z;

    var from = {
      x: xPos,
      y: yPos,
      z: zPos
    };

    var to = {
      x: xPos,
      y: yPos,
      z: zPos
    };

    var tween = new TWEEN.Tween(from)
      .to(to, 600)
      .easing(TWEEN.Easing.Linear.None)
      .onUpdate(function () {
        camera.position.set(this.x, this.y, this.z);
        // camera.lookAt(new THREE.Vector3(0, 0, 0));
        console.log('updated');
      })
      .onComplete(function () {
        console.log('completed');
        // camera.lookAt(new THREE.Vector3(0, 0, 0));
      })
      .start();
  }

  animate() {
    TWEEN.update();
    requestAnimationFrame(animate);
    // renderer.render(scene, camera);
    // controls.update();
  }

  poll() {

    animate();
    //
    // position.setZ(zPos+=100);

    // this.setState({
    //   cameraModule: {
    //     ...this.state.cameraModule,
    //     camera: {
    //       ...this.state.cameraModule.camera,
    //       rotation: {
    //         ...this.state.cameraModule.camera.rotation,
    //         x: Math.random() * 800 - 400
    //       }
    //     }
    //   }
    // },  console.log(this.state.cameraModule));
    //
    // this.setState({
    //   camera: {
    //     position: {
    //       z:  Math.random() * 800 - 400,
    //     },
    //     rotation: {
    //       y: Math.random() * 800 - 400,
    //       x: Math.random() * 800 - 400,
    //       z: Math.random() * 800 - 400
    //     }
    //   }
    // })
  }

  render() {
    return (
      <App modules={[
        new SceneModule(),
        this.state.cameraModule,
        new RenderingModule({
          bgOpacity: 0,
          renderer: {alpha: true}
        }),
        new OrbitModule()
      ]}
           // refApp={app => {
           //   console.log(app); // app
           // }}
      >
        {
          this.state.spheres.map(function (result, id) {
            return (
              <Sphere
                geometry={this.state.geometry}
                material={new MeshBasicMaterial({color: Math.random() * 0xffffff, opacity: this.state.opacity})}
                key={id}
                // refComponent={component => {
                //   console.log(component); // component
                // }}
                position={[Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400]}
              />
            )
          }, this)
        }
      </App>
    )
  }
}