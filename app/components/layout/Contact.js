import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import ContactForm from "../form/ContactForm";

export class Contact extends Component {
  render() {
    return (
      <Grid fluid>
        <Row style={{height: '100vh', alignItems: 'center'}}>
          <Col md={6}>
            <h4>Contact Me</h4>
            <ContactForm/>
          </Col>
          <Col md={6}>
          </Col>
        </Row>
      </Grid>
    )
  }
}