import React, { Component } from "react";
import Modal from "../Modal";
import browserHistory from "../../history";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { getSingleStreamAction } from "../../actions/index";

class StreamDelete extends Component {
  renderActionButtons = () => {
    //return JSX that renders action buttons...
    return (
      <React.Fragment>
        <div className="ui button primary ">Delete</div>
        <div className="ui button" onClick={()=>this.props.history.goBack()}>
          Cancel
        </div>
      </React.Fragment>
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
      <Modal
        content={this.renderContentProp()}
        header="Delete this Stream?"
        actions={this.renderActionButtons()}
        onDismiss={this.onDismiss}
      />
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
