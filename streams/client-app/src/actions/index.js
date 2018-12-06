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

//redux thunk as this is async
export const streamCreateAction = formData => async dispatch => {
  console.log("action hit!");
  axios.post("/streams", formData);

  // HTTP POST so no returned object with action
};
