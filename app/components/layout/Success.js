import React, {Component} from 'react';
import {Col} from 'react-flexbox-grid';

export class Success extends Component {
  render() {
    return (
      <Col md={12}>
        <div className="card text-left">
          <div className="card-block">
            <h4 className="card-title">Success!</h4>
            <p>Thank you for contacting me, I'll get back to you as soon as I can!</p>
          </div>
        </div>
      </Col>
    )
  }
}