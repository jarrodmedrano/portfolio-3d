import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export class Jumbo extends React.Component {
  render() {
    return (
      <Jumbotron style={{background: 'transparent'}}>
        <div className="text-center">
          <h1 className="display-3">Jarrod Medrano</h1>
          <p className="lead">FRONT-END UI DEVELOPER</p>
          <Button>Contact</Button>
        </div>
      </Jumbotron>
    )
  }
}