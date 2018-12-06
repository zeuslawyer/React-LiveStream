import lo_ from "lodash";

import { actionKeys } from "../actions/index";

/*
ALWAYS ALWAYS
remember that you cannot mutate the state objects directly inside a reducer.  
MUST MUST use spread operators, or map functions etc to return a new array/object
except when the reducer is NOT triggered by that action type
*/

export default (currentState = {}, action) => {
  switch (action.type) {
    // fetch all
    case actionKeys.FETCH_STREAMS:
      //method 1 using lodash
      return { ...currentState, ...lo_.mapKeys(action.payload, "id") };
    /*Method2
      let all = { ...currentState };
      action.payload.forEach(obj => {
        all[obj.id] = obj;
      });
      //   console.log("fetch streams reducer >>", streams);
      return all;
    */

    //create one
    case actionKeys.STREAM_CREATE:
      return { ...currentState, [action.payload.id]: action.payload };

    //fetch one
    case actionKeys.FETCH_A_STREAM:
      return { ...currentState, [action.payload.id]: action.payload };

    //edit one
    case actionKeys.EDIT_A_STREAM:
      return { ...currentState, [action.payload.id]: action.payload };

    //fetch one
    case actionKeys.DELETE_STREAM:
      // method 1 - using lodash, but apparently its slow?
      return lo_.omit(currentState, action.payload);

    /*method 2 - may be faster than lodash omit?
      const newState = { ...currentState };
      delete newState[action.payload];
      return newState;
    */
    default:
      return currentState;
  }
};
