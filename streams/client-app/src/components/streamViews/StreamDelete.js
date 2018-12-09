import React, { Component } from "react";
import Modal from "../Modal";
import browserHistory from "../../history";
import { connect } from "react-redux";
import { getSingleStreamAction } from "../../actions/index";

class StreamDelete extends Component {
  renderActionButtons = () => {
    //return JSX that renders action buttons...
    return (
      <div>
        <div className="ui button primary">Delete</div>
        <div className="ui button" onClick={() => this.props.history.goBack()}>
          Cancel
        </div>
      </div>
    );
  };

  onDismiss = () => {
    browserHistory.push("/");
  };

  componentDidMount = () => {
    // console.log(this.props.match.params);
    //get the stream's ID from the URL....
    this.props.getSingleStreamAction(this.props.match.params.id);
  };

  renderContentProp = () => {
    if (!this.props.stream) {
      return "Are you sure you want to delete?";
    }

    return `Are you sure you want to delete ${this.props.stream.title} `;
  };

  render() {
    return (
      <div>
        <Modal
          content={this.renderContentProp()}
          header="Delete this Stream?"
          actions={this.renderActionButtons()}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

const mapStatetoProps = (state, currentProps) => {
  return { stream: state.streams[currentProps.match.params.id] };
};

export default connect(
  mapStatetoProps,
  { getSingleStreamAction }
)(StreamDelete);
