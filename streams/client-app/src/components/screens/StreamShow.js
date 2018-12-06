import React, { Component } from "react";
import { connect } from "react-redux";
import {  } from "../../actions/index";

class StreamShow extends Component {
  
  render() {
    

    return (
      <div>
        <p>Showing Stream here..</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    
  };
};

export default connect(
  null,
  {  }
)(StreamShow);
