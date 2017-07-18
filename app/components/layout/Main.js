import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home, Contact, Navigator } from './index';
import {Grid, Row, Col} from 'react-flexbox-grid';

export class Main extends Component {
  render() {
    return (
      <main>
        <Navigator />
        <Grid fluid>
          <Row style={{height: '100vh'}}  middle="xs" center="xs">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/contact' component={Contact}/>
            </Switch>
          </Row>
        </Grid>
      </main>
    )
  }
}

