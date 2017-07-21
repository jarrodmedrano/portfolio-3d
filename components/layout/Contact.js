import React, {Component} from 'react';
import {Col} from 'react-flexbox-grid';
import ContactForm from "../form/ContactForm";

export class Contact extends Component {
  render() {
    return (
          <Col md={12}>
            <div className="text-left">
              <h4>Contact Me</h4>
              <ContactForm history={this.props.history} />
            </div>
          </Col>
    )
  }
}