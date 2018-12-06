import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import authReducer from "./authReducer";
import streamsReducer from './streamsReducer'


export default combineReducers({
  authStatus: authReducer,
  form: reduxFormReducer,
  streams: streamsReducer
});
