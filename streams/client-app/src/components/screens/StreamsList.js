import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllStreamsAction } from "../../actions/index";

export class StreamsList extends Component {
  renderStreams = () => {
    return <div>List of Streams...</div>;
  };

  componentDidMount = () => {
    this.props.getAllStreamsAction();
  };

  render() {
    // console.log(this.props.streams);
    if (this.props.streams[1]) return this.renderStreams();

    return (
      <div>
        <p>No Streams</p>
        {/* <button onClick={this.showStreams}>SHOW STREAMS</button> */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    streams: state.streams
  };
};

export default connect(mapStateToProps, {getAllStreamsAction} )(StreamsList);
