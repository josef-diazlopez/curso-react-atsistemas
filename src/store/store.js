/** Almacén donde se van a guardar todos los datos globales de la aplicación */

import { createStore as createStoreRedux } from 'redux'
import { reducers } from '../reducers/reducers'

import { composeWithDevTools } from 'redux-devtools-extension'

export const createStore = () => {
    const composeEnhancers = composeWithDevTools({})
    const store = createStoreRedux(reducers, composeEnhancers())
    return store
}
