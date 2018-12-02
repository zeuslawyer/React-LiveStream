import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  //form field components -> functional components
  renderInputField = formProps => {
    // console.log(formProps)
    // pass the formProps.input object as an object of props to input.
    //uses the same k/v pairing
    return (
      <div>
        <input {...formProps.input} />
      </div>
    );
  };

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInputField} />
        <Field name="description" component={this.renderInputField} />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
