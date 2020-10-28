import { INCREMENT, DECREMENT } from "../../actions/counter/counter";
import { createReducer } from "../utils";

const initialState = {
  count: 0,
};

export default createReducer(initialState, {
  [INCREMENT]: increment,
  [DECREMENT]: decrement,
});

function decrement(state, action) {
  return {
      ...state,
    count: state.count - (action.payload || 1),
  };
}

function increment(state, action) {
  return {
      ...state,
    count: state.count + (action.payload || 1),
  };
}
