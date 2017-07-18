import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import ContactForm from "../form/ContactForm";

export class Contact extends Component {
  render() {
    return (
          <Col md={4}>
            <div className="text-left">
              <h4>Contact Me</h4>
              <ContactForm/>
            </div>
          </Col>
    )
  }
}