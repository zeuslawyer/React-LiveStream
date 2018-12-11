import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllStreamsAction,
  getSingleStreamAction
} from "../../actions/index";
import flv from "flv.js";

class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount = () => {
    const { id } = this.props.match.params;
    // this.props.getAllStreamsAction();    //->> this works too but sets redux store to have all streams
    this.props.getSingleStreamAction(id);
    this.renderPlayer(id);
  };

  componentDidUpdate=()=>{
    this.renderPlayer(this.props.match.params.id)
  }

  componentWillUnmount=()=>{
    this.player.destroy()
  }

  renderPlayer =(id) => {
    //setup flv live streamer - if not already setup || if stream data not undefined
    if (this.player || !this.props.stream) return;
    // console.log(this.videoRef);
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}` //ref to Node-Media-Server docs
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
    // .play();
  }

  render() {
    if (!this.props.stream) return null;

    const { title, description } = this.props.stream;

    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
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
