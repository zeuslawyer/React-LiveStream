import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleStreamAction, editStreamAction } from "../../actions/index";
import StreamForms from "./StreamForms";

class StreamEdit extends Component {
  render() {
    // console.log(this.props);
    if (!this.props.stream) return <div> / ...fetching... /</div>;
    
    const title = this.props.stream.title
    const description = this.props.stream.description
    return (
      <div>
        <h3>Edit this Stream</h3>
        <StreamForms
          // initialValues={this.props.stream}
          initialValues={{title, description}}
          onSubmit={this.submitEdit}
        />
      </div>
    );
  }

  componentDidMount = () => {
    this.props.getSingleStreamAction(this.props.match.params.id);
  };

  submitEdit = formData => {
    console.log("Editing the form with the following new values: ", formData);
    this.props.editStreamAction(this.props.match.params.id, formData);
  };
}

const mapStatetoProps = (state, currentProps) => {
  const streamId = currentProps.match.params.id;
  return { stream: state.streams[streamId] };
};

export default connect(
  mapStatetoProps,
  { getSingleStreamAction, editStreamAction }
)(StreamEdit);
