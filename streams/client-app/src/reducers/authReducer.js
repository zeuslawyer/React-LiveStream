import { actionKeys } from "../actions/index";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionKeys.SIGN_IN:
      return { ...currentState, isSignedIn: true, userId: action.payload };
    case actionKeys.SIGN_OUT:
      return { ...currentState, isSignedIn: false, userId: null }; //ensure all data reset to null on signout
    default:
      return currentState;
  }
};
