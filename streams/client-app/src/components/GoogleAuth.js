import React, { Component } from "react";

class GoogleAuth extends Component {
  componentDidMount(){
      window.gapi.load('client:auth2', ()=>{
          window.gapi.client.init({
              clientId : process.env.REACT_APP_OAUTH_ID,
              scope: 'email'
          })
      })
  }  
  render() {
    return <div className="item">Google Auth</div>;
  }
}

export default GoogleAuth;
