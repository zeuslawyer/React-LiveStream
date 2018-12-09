import React from "react";
import ReactDOM from "react-dom";
import browserHistory from "../history";

function Modal(props) {
  //create portal takes to arguments : some JSX, and the DOM element to attach it to
  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={() => browserHistory.push("/")}
    >
      <div
        className="ui standard modal visible active"
        onClick={event => event.stopPropagation()}
      >
        <div className="header">{props.header}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}

export default Modal;
