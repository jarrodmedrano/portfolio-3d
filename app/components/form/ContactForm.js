import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { SubmissionError, reduxForm, Field } from 'redux-form'
import { createPost } from '../../actions/index';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDqzla75CXN9UNGtKbYJ44oHQHHE_O80vw",
  authDomain: "slashclick.firebaseapp.com",
  databaseURL: "https://slashclick.firebaseio.com",
  projectId: "slashclick",
  storageBucket: "slashclick.appspot.com",
  messagingSenderId: "87044009797"
};
firebase.initializeApp(config);

const renderField = ({input, label, type, name, style, meta: {touched, error}}) => (
  <div style={style} >
    <Label for={name}>{label}</Label>
    <Input {...input} placeholder={label} type={type} name={name} className="form-group" />
    {touched && error && <span className="text-danger">{error}</span>}
  </div>
)

class ContactForm extends React.Component {
  onSubmit(props) {
    const {reset} = this.props;
    firebase.database().ref('messages').push({
      props
      })
      .catch(error => {
        if(error.validationErrors) {
          throw new SubmissionError(error.validationErrors)
        } else {
        }
      })
      .then(() => {
        reset();
        this.props.history.push('/success');
      })
  }

  render() {
    const {handleSubmit, submitting} = this.props

    const gotcha = {
      display: 'none'
    }

    return (
      <Form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <FormGroup>
          <Field
            name="Email"
            type="email"
            component={renderField}
            label="Email"
          />
        </FormGroup>
        <FormGroup>
          <Field
            name="Message"
            type="textarea"
            component={renderField}
            label="Message"
          />
        </FormGroup>
        <Field style={gotcha} type="text" name="_gotcha" component={renderField} />
        <Field style={gotcha} type="hidden" name="_subject" value="Subject" component={renderField} />
        <Field style={gotcha} type="hidden" name="_cc" value="email@cc.com" component={renderField} />
        <Button disabled={submitting}>Submit</Button>
      </Form>
    );
  }
}

function validate(values) {
  const errors = {};
  if(!values.Email) {
    errors.Email = 'Please enter an Email';
  }
  if(!values.Message) {
    errors.Message = 'Please enter a Message';
  }

  return errors;
}

export default reduxForm({
  form: 'ContactForm',
  fields: ['Email', 'Message'],
  validate
}, null, { createPost } )(ContactForm);