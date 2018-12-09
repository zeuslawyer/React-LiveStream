import React from "react";
import ReactDOM from "react-dom";
import ModalInner from './modal-inner'

function Modal(props) {
  //create portal takes to arguments : some JSX, and the DOM element to attach it to
  return ReactDOM.createPortal(
    <ModalInner {...props} />,
    document.querySelector("#modal") //target DOM element
  );
}

export default Modal;
