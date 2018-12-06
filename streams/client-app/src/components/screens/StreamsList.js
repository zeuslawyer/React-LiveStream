import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllStreamsAction } from "../../actions/index";

export class StreamsList extends Component {
  renderStreams = () => {
    return this.props.streams.map(stream => {
      return (
        <p>
          <div>
            <b>Title:</b> {stream.title}
          </div>
          <div>
            <b>Description:</b> {stream.description}
          </div>
        </p>
      );
    });
    // return <div>List of Streams...</div>;
  };

  componentDidMount = () => {
    this.props.getAllStreamsAction();
  };

  render() {
    // console.log(this.props.streams);
    if (this.props.streams[0]) return <div>{this.renderStreams()} </div>;

    return (
      <div>
        <p>No Streams</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
 return {streams: Object.values(state.streams)}
};


export default connect(
  mapStateToProps,
  { getAllStreamsAction }
)(StreamsList);
