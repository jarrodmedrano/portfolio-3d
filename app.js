import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/main.css';
import {RouteContainer, Background} from './components/layout';

export class Application extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <RouteContainer />
      </div>
    )
  }
}
