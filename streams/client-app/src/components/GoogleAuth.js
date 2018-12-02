import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/index";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_OAUTH_ID,
          scope: "email"
        })
        .then(() => {
          // save instance of GAuth to the Class as property so can be referenced
          //by other functions in this class Comp
          this.auth = window.gapi.auth2.getAuthInstance();

          //dispatch action to set initial app-level store/state
          //gapi on the client -> retains source of truth on auth status
          this.onAuthChange(this.auth.isSignedIn.get());

          //set listener callback...gets called ONLY on auth change.
          //the callback is passed a boolean by GAPI
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  //listener - gapi passes auth status as a (boolean) argument
  //listener - then triggers actions/props to update app store/state
  onAuthChange = isSignedIn => {
    // console.log("listener callback triggered....");
    if (isSignedIn) {
      //if gapi confirms userId is signed in...call signIn actionc creator to update app level state
      let userId = this.auth.currentUser.get().getId();
      this.props.signIn(userId);
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) return null; //initial load

    if (this.props.isSignedIn) {
      return (
        <button
          className="ui red google button"
          onClick={() => this.auth.signOut()}
        >
          <i className="google icon" />
          SIGN OUT
        </button>
      );
    }
    //else if signed in is false
    return (
      <button
        className="ui blue google button"
        onClick={() => this.auth.signIn()}
      >
        <i className="google icon" />
        SIGN IN
      </button>
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.authStatus.isSignedIn,
    userId: state.authStatus.userId
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
