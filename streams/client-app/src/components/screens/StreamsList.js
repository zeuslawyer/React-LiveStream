import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllStreamsAction } from "../../actions/index";

export class StreamsList extends Component {
  renderStreams = () => {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned camera icon" />
          <div className="content">
            {stream.title}
            <div className="description"> {stream.description} </div>
          </div>
        </div>
      );
    });
  };

  componentDidMount = () => {
    this.props.getAllStreamsAction();
  };

  render() {
    // console.log(this.props.streams);
    if (this.props.streams[0])
      return (
        <div>
          <h2>STREAMS!</h2>
          <div className="ui celled list">{this.renderStreams()}</div>{" "}
        </div>
      );

    return (
      <div>
        <p>No Streams</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { streams: Object.values(state.streams) };
};

export default connect(
  mapStateToProps,
  { getAllStreamsAction }
)(StreamsList);
