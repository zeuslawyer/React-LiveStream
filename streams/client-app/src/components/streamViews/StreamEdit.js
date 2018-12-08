import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleStreamAction } from "../../actions/index";
import StreamForms from './StreamForms'

class StreamEdit extends Component {
  render() {
    // console.log(this.props.match);
    if (!this.props.stream) return <div> / No Stream found /</div>;
    // return <div>Title: {this.props.stream.title}</div>;
    return(
      <div>
        <StreamForms streamData={this.props.stream}/>
      </div>
    )
  }

  componentDidMount = () => {
    this.props.getSingleStreamAction(this.props.match.params.id);
  };
}

const mapStatetoProps = (state, currentProps) => {
  const streamId = currentProps.match.params.id;
  return { stream: state.streams[streamId] };
};

export default connect(
  mapStatetoProps,
  { getSingleStreamAction }
)(StreamEdit);
