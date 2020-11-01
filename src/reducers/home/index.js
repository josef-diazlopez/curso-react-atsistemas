import { createReducer } from "../utilsReducer";
import { INIT_HOME } from "../../actions/flow";
import {
  INIT_HOME_LOADED_CHARACTERS,
  INIT_HOME_LOADED_MURDERS,
  INIT_HOME_LOADED_TEMPS,
} from "../../actions/home";

const initialState = {
  data: {},
  meta: {},
  error: undefined,
};

export default createReducer(initialState, {
  [INIT_HOME]: show,
  [INIT_HOME_LOADED_TEMPS]: temps,
  [INIT_HOME_LOADED_MURDERS]: murders,
  [INIT_HOME_LOADED_CHARACTERS]: chars
});

function show(state, action) {
  return Object.assign({}, state, {
    data: Object.assign({}, state.data, action.payload),
    error: action.error,
  });
}

function temps(state, action) {
  return Object.assign({}, state, {
    data: Object.assign({}, state.data, action.payload),
    error: action.error,
  });
}

function chars(state, action) {
  return Object.assign({}, state, {
    data: Object.assign({}, state.data, action.payload),
    error: action.error,
  });
}

function murders(state, action) {
  return Object.assign({}, state, {
    data: Object.assign({}, state.data, action.payload),
    error: action.error,
  });
}
