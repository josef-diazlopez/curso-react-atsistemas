import { spawn, takeEvery, put } from 'redux-saga/effects';
import { INIT } from '../../actions/flow';

export default function* oneClickSaga() {
  yield spawn(watchInitOneClick);
}

function* watchInitOneClick() {
  yield takeEvery(INIT, init);
}

function* init() {
  try {
    // yield keycloack.authenticated ? put({ type: INIT_ONE_CLICK, payload: {} }): undefined;
    // yield put({ type: INIT_ONE_CLICK, payload: action.payload });
  } catch (e) {
    console.error(e);
  }
}