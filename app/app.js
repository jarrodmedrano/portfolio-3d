import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Footer, Jumbo, Background} from './components/layout';

export class Application extends Component {
  render() {
    return (
      <div>
        <Background/>
        <Grid fluid>
          <Row style={{height: '100vh', alignItems: 'center'}}>
            <Col md={12}>
              <Jumbo />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
