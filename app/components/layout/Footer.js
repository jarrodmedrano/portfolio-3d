import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ContactForm from "../form/ContactForm";


export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <Row>
            <Col md={6}>
              <h4>Contact Me</h4>
              <ContactForm/>
            </Col>
            <Col md={6}>
            </Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}