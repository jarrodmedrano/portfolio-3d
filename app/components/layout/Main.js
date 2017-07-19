import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home, Contact, Navigator} from './index';
import {Grid, Row, Col} from 'react-flexbox-grid';
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from './AnimatedSwitch';

export class Main extends Component {
  render() {
    return (
      <Grid fluid className="wrapper">
        <Row style={{height: '100vh'}}  middle="xs" center="xs">
          {this.props.children}
        </Row>
      </Grid>
    )
  }
}

