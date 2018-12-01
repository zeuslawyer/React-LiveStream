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
