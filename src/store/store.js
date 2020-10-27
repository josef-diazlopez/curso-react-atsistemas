import { createStore as createStoreRedux, applyMiddleware } from "redux";
import { reducers } from "../reducers/reducers";

export const createStore = () => {

    const store = createStoreRedux(reducers);
    return store;

};
