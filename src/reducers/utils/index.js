export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    // todo: duda. action.type y action.payload de dónde salen
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
