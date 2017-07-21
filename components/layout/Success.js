import React, {Component} from 'react';
import {Col} from 'react-flexbox-grid';

export class Success extends Component {
  render() {
    return (
          <Col md={12}>
            <div className="text-left">
              <h4>Success!</h4>
              <p>Thank you for contacting me</p>
            </div>
          </Col>
    )
  }
}