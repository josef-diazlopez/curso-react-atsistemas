import { DECREMENT, INCREMENT } from "../../actions/counter/counter";
import { createReducer } from "../utils";

const initialState = {
    count: 0,
};

/**
 * APUNTES: se definen las funciones aquí y luego se desarrollan abajo, 
 * de manera que se vea lo importante(definición) arriba y las funciones abajo 
 */
export default createReducer(initialState, {
    [DECREMENT]: decrement,
    [INCREMENT]: increment,
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
