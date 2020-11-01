import { createReducer } from '../utilsReducer';
import { INIT_EPISODE } from '../../actions/flow';

const initialState = {
  data: {},
  meta: {},
  error: undefined,
};

export default createReducer(initialState, {
  [INIT_EPISODE]: show,
});

function show(state, action) {
  return Object.assign({}, state, {
    data: Object.assign({}, state.data, action.payload),
    error: action.error,
  });
}