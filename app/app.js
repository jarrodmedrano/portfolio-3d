import React, {Component} from 'react';
import {App, Sphere, Tetrahedron, Box} from '../src/index';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Jumbotron, Button } from 'reactstrap';

import {MeshBasicMaterial} from 'three';

import {SceneModule, CameraModule, RenderingModule} from 'whs/src/modules/app/export';
import {OrbitModule} from 'whs/src/modules/controls/export';

import {BasicSphere} from './components/BasicSphere';

export class Application extends Component {

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
        }
      }
    }
  }

  render() {
    this.state.spheres.fill(20);
    return (
      <Grid fluid>
        <Row>
        <Col md={12}>
          <Jumbotron style={{background: 'transparent'}}>
            <h1 className="display-3 text-center">Jarrod Medrano</h1>
            <p className="lead text-center">FRONT-END UI DEVELOPER</p>
            <Button className="text-center">Contact</Button>
          </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
          </Col>
        </Row>
        <App modules={[
          new SceneModule(),
          new CameraModule({
            position: {
              z: this.state.camera.position.z
            }
          }),
          new RenderingModule({
            bgOpacity: 0,
            renderer: {alpha: true}
          }),
          new OrbitModule()
        ]}
             refApp={app => {
               console.log(app); // app
             }}
        >
          {
            this.state.spheres.map(function(result, id) {
              return (
                <Sphere
                  geometry={this.state.geometry}
                  material={new MeshBasicMaterial({color: Math.random() * 0xffffff, opacity: this.state.opacity})}
                  key={id}
                  refComponent={component => {
                    console.log(component); // component
                  }}
                  position={[Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400]}
                />
              )
            }, this)
          }
        </App>
      </Grid>
    )
  }
}
