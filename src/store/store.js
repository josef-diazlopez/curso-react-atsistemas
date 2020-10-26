// import { createStore as createStoreRedux } from "redux";

// function counter(state = 0, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// export const createStore = () => {
//   return createStoreRedux(counter);
// };

import { createStore as createStoreRedux, applyMiddleware } from "redux";
import { reducers } from "../reducers/reducers";
// import createSagaMiddleware from "redux-saga";
// import rootSaga from "../sagas";
// import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const createStore = () => {
  const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  });

  //   const sagaMiddleware = createSagaMiddleware();

  const store = createStoreRedux(
    reducers,
    composeEnhancers()
    //   composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
  );

  //   sagaMiddleware.run(rootSaga);
  return store;
};
