import React, {Component} from 'react';
import {Col} from 'react-flexbox-grid';
import ContactForm from "../form/ContactForm";

export class Contact extends Component {
  render() {
    return (
          <Col md={12}>
            <div className="card text-left">
              <div className="card-block">
              <h4 className="card-title">Contact Me</h4>
              <ContactForm history={this.props.history} />
              </div>
            </div>
          </Col>
    )
  }
}