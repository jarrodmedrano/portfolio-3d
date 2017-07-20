import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { SubmissionError, reduxForm, Field } from 'redux-form'
import { createPost } from '../../actions/index';
import {createStore, combineReducers} from 'redux';

const renderField = ({input, label, type, name, meta: {touched, error}}) => (
  <div>
    <Label for={name}>{label}</Label>
    <Input {...input} placeholder={label} type={type} name={name} className="form-group" />
    {touched && error && <span className="text-danger">{error}</span>}
  </div>
)

class ContactForm extends React.Component {
  //define an object on the postsnew class
  static contextTypes = {
    router: React.PropTypes.object
  };

  onSubmit(props) {
    const ROOT_URL = 'https://formspree.io/jmedran@gmail.com';

    axios.post(`${ROOT_URL}`, props)
      .catch(error => {
        // how you pass server-side validation errors back is up to you
        if(error.validationErrors) {
          throw new SubmissionError(error.validationErrors)
        } else {
          // what you do about other communication errors is up to you
        }
      })
      .then(() => {
      // blog post has been created navigate to index
      //we navigate by calling this.context.router.push with the new path to navigate to.

      this.context.router.push('/');
    })
  }

  render() {

    const {error, handleSubmit, pristine, reset, submitting} = this.props

    return (
      <Form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <FormGroup>
          <Field
            name="email"
            type="email"
            component={renderField}
            label="email"
          />
        </FormGroup>
        <FormGroup>
          <Field
            name="message"
            type="textarea"
            component={renderField}
            label="message"
          />
        </FormGroup>
        <Button disabled={submitting}>Submit</Button>
      </Form>
    );
  }
}

function validate(values) {
  const errors = {};
  if(!values.email) {
    errors.email = 'Please enter an email';
  }
  if(!values.message) {
    errors.message = 'Please enter a message';
  }

  return errors;
}
// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps

//reduxForm 1st is form config, 2nd is mapstatetoprops, 3rd is mapdispatchtoprops
export default reduxForm({
  form: 'ContactForm',
  fields: ['email', 'message'],
  validate
}, null, { createPost } )(ContactForm);