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

          //set initial auth state
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });

          //set listener...gets called ONLY on auth change
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    //initial load
    if (this.state.isSignedIn === null) return null;

    if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={()=>this.auth.signOut()}>
          <i className="google icon" />
          SIGN OUT
        </button>
      );
    }
    //else if signed in is false
    return (
      <button className="ui blue google button" onClick={()=>this.auth.signIn()}>
        <i className="google icon" />
        SIGN IN
      </button>
    );
  }

  // onButtonClick = () => {
  //   if (this.auth.isSignedIn.get()) {
  //     this.auth.signOut();
  //   } else if (!this.auth.isSignedIn.get()) {
  //     this.auth.signIn();
  //   }
  // };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
