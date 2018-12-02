import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  //form field components -> functional components
  renderInputField = formProps => {
    console.log(formProps);
    return (
      <div>
        <input
          value={formProps.input.value}
          onChange={formProps.input.onChange}
        />
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
