import React, { Component } from "react";

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_OAUTH_ID,
          scope: "email"
        })
        .then(() => {
          // save instance of GAuth to the Class as property so can be referenced by other functions in this class Comp
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange)
        });
    });
  }

  onAuthChange = () => {
    this.setState( {isSignedIn : this.auth.isSignedIn.get()} )
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null)
      return <div className="item">No Auth Instance</div>;
    if (this.state.isSignedIn) return <div className="item">Signed In</div>;

    //else if false
    return <div className="item">Please Sign In</div>;
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
