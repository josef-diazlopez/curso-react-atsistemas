import { createStore as createStoreRedux, applyMiddleware } from 'redux';
import {reducers} from '../reducers/reducers';
//import createSagaMiddleware from 'redux-saga';
//import rootSaga from '../sagas';
//import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


export const createStore = () => {
const composeEnhancers = composeWithDevTools({
// options like actionSanitizer, stateSanitizer
});
//const sagaMiddleware = createSagaMiddleware();

const store = createStoreRedux(
reducers,
composeEnhancers()
)
//sagaMiddleware.run(rootSaga);
return store;
}

//applyMiddleware(thunk, sagaMiddleware)