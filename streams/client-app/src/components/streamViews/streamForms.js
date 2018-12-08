import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  // the form input prop always receives a form props object
  //generated BY redux form, for our use
  renderInputField = formProps => {
    // the props passed to each rendered input element by <Field />
    //this function gets called EVERY TIME SOMETHING GETS INPUT INTO A FIELD!!!
    console.log(formProps);

    // apply error class name to input field div if meta.error
    const error = formProps.meta.error && formProps.meta.touched ? "error" : "";
    const className = `field  ${error}`;

    return (
      <div className={className}>
        <label>
          {formProps.label}
          {/* pass the formProps.input object as an object of props to input.
  uses the same k/v pairing */}
          <input {...formProps.input} />
        </label>
        {this.renderInputErrorMessage(formProps.meta)}
      </div>
    );
  };

  renderInputErrorMessage = meta => {
    if (meta.error && meta.active) {
      // if (meta.error && meta.touched) {
      return (
        <div className="ui error message">
          <div className=""> {meta.error} </div>
        </div>
      );
    }
  };

  //redux form's handleSubmit prop  invokes our form submit handler,
  //with the field name/value obj as argument
  submitForm = formData => {
    //this handler only runs if there are NO validation errors returned in the meta property in formProps
    this.props.onSubmit(formData);
    console.log("form submitted with the following fields: ", formData);
  };

  render() {
    // console.log(this.props.streamData); // all the many things that redux forms adds to streamForm component

    return (
      <form
        className="ui form error"
        //pass a prop of onSubmit, which calls redux form's handleSubmit prop -> it calls prevent default
        //it also takes in an argument with the Form Values and passes it into the callback provided
        onSubmit={this.props.handleSubmit(this.submitForm)}
      >
        <Field
          name="title"
          //render the form input within a Field Component  ->  pass a rendering function OR imported functional components
          //this fn is passed a form props object, which contains all the props from here + input values
          component={this.renderInputField}
          label="TITLE"
        />
        <Field
          name="description"
          component={this.renderInputField}
          label="DESCRIPTION"
        />
        <button className="ui button green" type="submit">
          SUBMIT
        </button>
      </form>
    );
  }
}

//validate form -> always declared OUTSIDE the component class implementation
//redux forms always passes it the current form data as an object
//it must return empty object (no errors) OR object with incorrect field's name and an error message
const validateForm = formData => {
  const errors = {};

  //error object's keys must match the name of the field
  if (!formData.title) errors.title = "You must enter a title";
  if (!formData.description)
    errors.description = "You must enter a description";

  return errors;
};

export default reduxForm({
  form: "streamForm", //form name- typically give it the file name
  validate: validateForm // key must always be "validate". This now adds the meta prop to form input element
})(StreamForm);
