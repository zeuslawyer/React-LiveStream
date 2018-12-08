import React, { Component } from "react";
import { connect } from "react-redux";
import { streamCreateAction } from "../../actions/index";
import StreamForms from "./StreamForms";

class StreamCreate extends Component {
  //form submit handler, called from child -> streamForms
  onFormSubmit = formData => {
    //this handler only runs if there are NO validation errors returned in the meta property in formProps
    this.props.streamCreateAction(formData);
    // console.log("form submitted with the following fields: ", formData);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForms onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { streamCreateAction }
)(StreamCreate);
