import { createReducer } from "../utilsReducer";
import { INIT, INIT_HOME } from "../../actions/flow";

const initialState = {
  page: null,
  state: INIT,
};

export default createReducer(initialState, {
  [INIT_HOME]: init(INIT_HOME)
});

function init(flow) {
  return (state) => {
    return Object.assign({}, state, { state: flow });
  };
}
