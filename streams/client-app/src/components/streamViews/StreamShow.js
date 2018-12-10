import React, { Component } from "react";
import { connect } from "react-redux";
import {} from "../../actions/index";
import {
  getAllStreamsAction,
  getSingleStreamAction
} from "../../actions/index";

class StreamShow extends Component {
  componentDidMount = () => {
    this.props.getSingleStreamAction(this.props.match.params.id);
    // this.props.getAllStreamsAction();    //->> this works too but sets redux store to have all streams
  };

  render() {
    if (!this.props.stream) return null;

    const { title, description } = this.props.stream;

    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { getAllStreamsAction, getSingleStreamAction }
)(StreamShow);
