import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import authReducer from "./authReducer";
import streamsReducer from './streamsReducer'

/*
ALWAYS ALWAYS
remember that you cannot mutate the state objects directly inside a reducer.  
MUST MUST use spread operators, or map functions etc to return a new array/object
except when the reducer is NOT triggered by that action type
*/

export default combineReducers({
  authStatus: authReducer,
  form: reduxFormReducer,
  streams: streamsReducer
});
