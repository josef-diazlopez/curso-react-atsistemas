import { createReducer } from "../utilsReducer";
import { INIT, INIT_EPISODE, INIT_HOME } from "../../actions/flow";

const initialState = {
  page: null,
  state: INIT,
};

export default createReducer(initialState, {
  [INIT_HOME]: init(INIT_HOME),
  [INIT_EPISODE]: init(INIT_EPISODE)
});

function init(flow) {
  return (state) => {
    return Object.assign({}, state, { state: flow });
  };
}
