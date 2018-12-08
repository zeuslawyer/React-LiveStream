import React from "react";
import ReactDOM from "react-dom";

const JSX_MODAL = (
  <div className="ui dimmer modals visible active">
    <div className="ui standard modal visible active">
      ARE YOU SURE YOU WANT TO DELETE?
    </div>
  </div>
);

function Modal(props) {
  return ReactDOM.createPortal(JSX_MODAL, document.querySelector("#modal"));
}

export default Modal;
