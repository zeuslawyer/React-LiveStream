import axios from "../API/axios";

export const actionKeys = {
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
  STREAM_CREATE: "STREAM_CREATE",
  FETCH_A_STREAM: "FETCH_STREAM",
  FETCH_STREAMS: "FETCH_STREAMS",
  EDIT_A_STREAM: "EDIT_STREAM",
  EDIT_STREAMS: "EDIT_STREAMS",
  DELETE_STREAM: "DELETE_STREAMS"
};

export const signIn = userId => {
  // console.log('signIN Action called');
  return {
    type: actionKeys.SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  // console.log('signOUT Action called');
  return {
    type: actionKeys.SIGN_OUT
  };
};

// ====== RESTful ACTION CREATORS  ==============

//redux thunk, as this is async, and it returns an async function, not an object
export const streamCreateAction = formData => {
  return async dispatch => {
    // console.log("action hit!");
    const response = await axios.post("/streams", formData);
    console.log(response);
    dispatch({
      type: actionKeys.STREAM_CREATE,
      payload: response.data
    });
  };
};

export const getAllStreamsAction = () => {
  return async dispatch => {
    const response = await axios.get("/streams");
    // console.log(response.data);
    dispatch({
      type: actionKeys.FETCH_STREAMS,
      payload: response.data
    });
  };
};

export const getSingleStreamAction = id => {
  return async dispatch => {
    const response = await axios.get(`/streams/${id}`);
    console.log(response);
    dispatch({
      type: actionKeys.FETCH_A_STREAM,
      payload: response.data
    });
  };
};

export const editStreamAction = (id, formData) => {
  return async dispatch => {
    const response = await axios.put(`/streams/${id}`, formData);
    console.log(response);
    dispatch({
      type: actionKeys.EDIT_A_STREAM,
      payload: response.data
    });
  };
};

export const deleteStreamAction = id => {
  return async dispatch => {
    const response = await axios.delete(`/streams/${id}`);
    console.log(response); //response declaration not needed
    dispatch({
      type: actionKeys.FETCH_A_STREAM,
      payload: id //note payload is id of deleted stream
    });
  };
};
