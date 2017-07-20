import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { SubmissionError, reduxForm, Field } from 'redux-form'
import { createPost } from '../../actions/index';

const renderField = ({input, label, type, name, meta: {touched, error}}) => (
  <div>
    <Label for={name}>{label}</Label>
    <Input {...input} placeholder={label} type={type} name={name} className="form-group" />
    {touched && error && <span className="text-danger">{error}</span>}
  </div>
)

class ContactForm extends React.Component {

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  parseJSON(response) {
    return response.json()
  }

  onSubmit(props) {
    const {createRecord, reset} = this.props;

    const ROOT_URL = '//formspree.io/jmedran@gmail.com';
    fetch(`${ROOT_URL}`, props)
      .catch(error => {
        // how you pass server-side validation errors back is up to you
        if(error.validationErrors) {
          throw new SubmissionError(error.validationErrors)
        } else {
          // what you do about other communication errors is up to you
        }
      })
      .then((response) => {
      // blog post has been created navigate to index
      //we navigate by calling this.context.router.push with the new path to navigate to.
        reset();
    })
  }

  render() {

    const {error, handleSubmit, pristine, reset, submitting} = this.props

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
        <Field type="text" name="_gotcha" component={renderField} />
        <Field type="hidden" name="_subject" value="Subject" component={renderField} />
        <Field type="hidden" name="_cc" value="email@cc.com" component={renderField} />
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
// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps

//reduxForm 1st is form config, 2nd is mapstatetoprops, 3rd is mapdispatchtoprops
export default reduxForm({
  form: 'ContactForm',
  fields: ['Email', 'Message'],
  validate
}, null, { createPost } )(ContactForm);