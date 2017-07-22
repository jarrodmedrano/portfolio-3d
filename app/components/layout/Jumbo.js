import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

export class Jumbo extends React.Component {
  render() {
    return (
      <Jumbotron style={{background: 'transparent'}}>
        <div className="text-left">
          <h1 className="display-3">JARROD MEDRANO</h1>
          <p className="lead">FRONT-END UI DEVELOPER</p>
          <Link to="/contact"><Button>Contact</Button></Link>
        </div>
      </Jumbotron>
    )
  }
}