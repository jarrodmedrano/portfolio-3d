import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Jumbo} from './index';

export class Home extends Component {
  render() {
    return (
        <Grid fluid>
          <Row style={{height: '100vh', alignItems: 'center'}}>
            <Col md={12}>
              <Jumbo />
            </Col>
          </Row>
        </Grid>
    )
  }
}