import { createReducer } from '../utilsReducer';
import { INIT_HOME } from '../../actions/flow';

const initialState = {
  data: {},
  meta: {},
  error: undefined,
};

export default createReducer(initialState, {
  [INIT_HOME]: show,
});

function show(state, action) {
  return Object.assign({}, state, {
    data: Object.assign({}, state.data, action.payload),
    error: action.error,
  });
}