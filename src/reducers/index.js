import { combineReducers } from 'redux';
import flow from './flow';
import home from './home'
import episode from './episode'


export default combineReducers({flow, home, episode});