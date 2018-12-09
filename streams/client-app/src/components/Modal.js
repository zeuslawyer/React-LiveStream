import React from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  //create portal takes to arguments : some JSX, and the DOM element to attach it to
  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={() => props.onDismiss()}
    >
      <div
        className="ui standard modal visible active"
        // disable click handling inside inner modal
        onClick={event => event.stopPropagation()}  
      >
        <div className="header">{props.header}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal") //target DOM element
  );
}

export default Modal;
