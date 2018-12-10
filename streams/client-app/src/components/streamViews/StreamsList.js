import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllStreamsAction } from "../../actions/index";

export class StreamsList extends Component {
  renderAdminButtons = stream => {
    let cond1 = stream.userId === this.props.currentUserId;
    let cond2 = !!this.props.currentUserId;
    if (cond1 && cond2) {
      return (
        <div
          className="right floated content"
          style={{
            display:
              this.props.currentUserId === stream.userId ? "block" : "none"
          }}
        >
          <Link
            // className="ui yellow tiny button"
            to={`/streams/edit/${stream.id}`}
          >
            <i className="edit outline icon large" />
          </Link>
          <Link
            // className="ui red  button"
            to={`/streams/delete/${stream.id}`}
          >
            <i className="trash alternate outline large red icon" />
          </Link>
        </div>
      );
    }
  };

  renderStreams = () => {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdminButtons(stream)}
          <i className="large middle aligned camera icon" />
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
              <b>{stream.title}</b>
            </Link>
            <div className="description"> {stream.description} </div>
          </div>
          {/* {this.renderAdminButtons(stream)} */}
        </div>
      );
    });
  };

  renderCreateStreamButton = params => {
    if (this.props.currentUserId && this.props.isSignedIn)
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui primary button">
            {" "}
            Create Stream
          </Link>
        </div>
      );
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
          <div className="ui celled list">{this.renderStreams()}</div>
          {this.renderCreateStreamButton()}
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
    currentUserId: state.authStatus.userId,
    isSignedIn: state.authStatus.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { getAllStreamsAction }
)(StreamsList);
