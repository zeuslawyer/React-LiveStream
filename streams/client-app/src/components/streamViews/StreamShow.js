import React, { Component } from "react";
import { connect } from "react-redux";
import {} from "../../actions/index";
import { getAllStreamsAction } from "../../actions/index";

class StreamShow extends Component {
  componentDidMount = () => {
    // this.props.getSingleStreamAction(this.props.match.params.id);
    this.props.getAllStreamsAction();
  };

  render() {
    if (!this.props.stream) return null;
    return (
      <div>
        <p>Showing Stream here..</p>
        {this.props.stream.title}
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
  { getAllStreamsAction }
)(StreamShow);
