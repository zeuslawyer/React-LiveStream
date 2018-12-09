import React, { Component } from "react";
import Modal from "../Modal";
import browserHistory from '../../history';


class StreamDelete extends Component {
  actionsButtons = (
    <div>
      <div className="ui button primary">Delete</div>
      <div className="ui button">Cancel</div>
    </div>
  );

  onDismiss = () => {
    browserHistory.push("/")
  }
    
  
  render() {
    return (
      <div>
        <Modal
          content="Are you sure you want to delete?"
          header="Delete this stream"
          actions={this.actionsButtons}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

export default StreamDelete;
