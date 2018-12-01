import { combineReducers } from "redux";

/*
ALWAYS ALWAYS
remember that you cannot mutate the state objects directly inside a reducer.  
MUST MUST use spread operators, or map functions etc to return a new array/object
except when the reducer is NOT triggered by that action type
*/

const INITIAL_STATE = {
     isSignedIn: null,
    email: null
    };
const authReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...currentState, isSignedIn: true, userId: action.payload };
    case "SIGN_OUT":
      return { ...currentState, isSignedIn: false, userId:null }; //ensure all data reset to null on signout
    default:
      return currentState;
  }
};

export default combineReducers({
  authStatus: authReducer
});
