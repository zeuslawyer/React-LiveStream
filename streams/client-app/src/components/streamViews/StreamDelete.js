import React, { Component } from "react";
import Modal from "../Modal";

class StreamDelete extends Component {
  actionsButtons = (
    <div>
      <div className="ui button primary">Delete</div>
      <div className="ui button">Cancel</div>
    </div>
  );

  render() {
    return (
      <div>
        <Modal
          content="Are you sure you want to delete?"
          header="Delete this stream"
          actions={this.actionsButtons}
        />
      </div>
    );
  }
}

export default StreamDelete;
