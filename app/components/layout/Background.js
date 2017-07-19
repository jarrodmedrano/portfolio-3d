import React from 'react';
import {App, Sphere} from '../../../src/index';
import {MeshBasicMaterial} from 'three';
import {SceneModule, CameraModule, RenderingModule} from 'whs/src/modules/app/export';
import {OrbitModule} from 'whs/src/modules/controls/export';

export class Background extends React.Component {
  constructor(props) {
    super(props);
    const spheres = new Array(100).fill(0);

    this.state = {
      spheres: spheres,
      opacity: 0.5,
      position: Math.random() * 800 - 400,
      color: Math.random() * 0xffffff,
      geometry: [3, 35, 35],
      camera: {
        position: {
          z: 20
        },
        rotation: {
          x: 300,
          y: 300,
          z: 300
        }
      }
    }
  }
  //
  // componentDidMount() {
  //   this.startPolling();
  // }
  //
  // componentWillUnmount() {
  //   if (this._timer) {
  //     clearInterval(this._timer);
  //     this._timer = null;
  //   }
  // }
  //
  // startPolling() {
  //   const self = this;
  //   setTimeout(function () {
  //     self.poll(); // do it once and then start it up ...
  //     self._timer = setInterval(self.poll.bind(self), 15000);
  //   }, 1000);
  // }
  //
  // poll() {
  //   console.log('polled');
  //   this.setState({
  //     camera: {
  //       position: {
  //         z:  Math.random() * 800 - 400,
  //       },
  //       rotation: {
  //         y: Math.random() * 800 - 400,
  //         x: Math.random() * 800 - 400,
  //         z: Math.random() * 800 - 400
  //       }
  //     }
  //   })
  // }

  render() {
    let cameraZ = this.state.camera.position.z;

    return (
      <App modules={[
        new SceneModule(),
        new CameraModule({
          position: {
            z: cameraZ
          },
          rotation: {
            x: this.state.camera.rotation.x,
            y: this.state.camera.rotation.y,
            z: this.state.camera.rotation.z
          }
        }),
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