import { spawn, takeEvery, put } from 'redux-saga/effects';
import { INIT, INIT_HOME } from '../../actions/flow';

export default function* oneClickSaga() {
  yield spawn(watchInitOneClick);
}

function* watchInitOneClick() {
  yield takeEvery(INIT, init);
}

function* init() {
  try {
     yield put({ type: INIT_HOME, payload: {}});
  } catch (e) {
    console.error(e);
  }
}