import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleStreamAction, editStreamAction, getAllStreamsAction } from "../../actions/index";
import StreamForms from "./StreamForms";

class StreamEdit extends Component {
  render() {
    // console.log(this.props);

    if (!this.props.stream) return <div> / ...fetching... /</div>;

    return (
      <div>
        <h3>Edit this Stream</h3>
        <StreamForms
          initialValues={this.props.stream}
          onSubmit={this.OnEditSubmit}
        />
      </div>
    );
  }

  componentDidMount = () => {
    this.props.getSingleStreamAction(this.props.match.params.id);
  };

  OnEditSubmit = formData => {
    console.log("Editing the form with the following new values: ", formData);
    this.props.editStreamAction(formData.id, formData);
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
