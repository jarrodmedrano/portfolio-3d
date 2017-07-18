import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home, Contact, Navigator } from './index';

export class Main extends Component {
  render() {
    return (
      <main>
        <Navigator />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </main>
    )
  }
}

