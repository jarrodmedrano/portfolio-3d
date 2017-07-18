import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class ContactForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input type="text" name="myname" id="exampleName" placeholder="Your Name" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="you@example.com" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Message</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
