import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Main, Background} from './components/layout';

export class Application extends Component {
  render() {
    return (
      <div>
        <Background/>
        <Main />
      </div>
    )
  }
}
