import React from 'react';
import {App, Sphere} from '../../../src/index';
import {MeshBasicMaterial} from 'three';
import {SceneModule, CameraModule, RenderingModule} from 'whs/src/modules/app/export';
import {OrbitModule} from 'whs/src/modules/controls/export';

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
      camera: {
        position: {
          z: 20
        },
        rotation: {
          x: 300,
          y: 300,
          z: 300
        }
      },
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

  poll() {
    this.state.cameraModule.camera.position.set(Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400)

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