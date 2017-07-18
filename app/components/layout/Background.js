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
  render() {
    return (
      <App modules={[
        new SceneModule(),
        new CameraModule({
          position: {
            z: this.state.camera.position.z
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
        new OrbitModule({
          controls: {
            noPan: true
          }
        })
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