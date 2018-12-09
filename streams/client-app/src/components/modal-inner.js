

import React from 'react'

function ModalInner(props) {
    // console.log(props);
  return (
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
  </div>
  )
}

export default ModalInner
