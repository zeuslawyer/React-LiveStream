import axios from "../API/axios";

export const signIn = userId => {
  // console.log('signIN Action called');
  return {
    type: "SIGN_IN",
    payload: userId
  };
};

export const signOut = () => {
  // console.log('signOUT Action called');
  return {
    type: "SIGN_OUT"
  };
};

//redux thunk, as this is async, and it returns an async function, not an object
export const streamCreateAction = formData => {
  return async dispatch => {
    console.log("action hit!");
    axios.post("/streams", formData);
  };
};
