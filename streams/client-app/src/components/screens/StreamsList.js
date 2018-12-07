import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllStreamsAction } from "../../actions/index";

export class StreamsList extends Component {
  renderAdminButtons = (stream) => {
    let cond1 = stream.userId === this.props.currentUserId;
    let cond2 = !!this.props.currentUserId;

    if (cond1 && cond2) {
      return (
        <div
          style={{
            display:
              this.props.currentUserId === stream.userId ? "block" : "none"
          }}
        >
          <button className="ui green button">EDIT</button>
          <button className="ui red button">DELETE</button>
        </div>
      );
    }
  };

  renderStreams = () => {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned camera icon" />
          <div className="content">
            {stream.title}
            <div className="description"> {stream.description} </div>
          </div>
          {this.renderAdminButtons(stream)}
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
  return {
    streams: Object.values(state.streams),
    currentUserId: state.authStatus.userId
  };
};

export default connect(
  mapStateToProps,
  { getAllStreamsAction }
)(StreamsList);
