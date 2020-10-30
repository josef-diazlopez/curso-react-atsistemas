import { createReducer } from "../utilsReducer";
import { INIT } from "../../actions/flow";

const initialState = {
  page: null,
  state: INIT,
};

export default createReducer(initialState, {});

function init(flow) {
  return (state) => {
    return Object.assign({}, state, { state: flow });
  };
}
