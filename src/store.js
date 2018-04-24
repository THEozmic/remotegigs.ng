import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

const initialState = {};

const JobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_SUCCESS":
      return action.response;
    default:
      return state;
  }
};

const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_FAILURE":
      return action.error;
    default:
      return state;
  }
};

export default createStore(
  combineReducers({
    jobs: JobsReducer,
    error: ErrorReducer
  }),
  applyMiddleware(ReduxThunk)
);
