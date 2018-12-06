import { actionKeys } from "../actions/index";

export default (currentState = {}, action) => {
  // fetch all
  switch (action.type) {
    case actionKeys.FETCH_STREAMS:
      let all = { ...currentState };
      action.payload.forEach(obj => {
        all[obj.id] = obj;
      });
      //   console.log("fetch streams reducer >>", streams);
      return all;

    //edit one
    case actionKeys.EDIT_A_STREAM:
      let edited = { ...currentState };
      edited[action.payload.id] = action.payload;
      return edited;

    default:
      return currentState;
  }
};
