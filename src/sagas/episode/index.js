import { spawn, takeEvery } from 'redux-saga/effects';
import { INIT_EPISODE } from '../../actions/flow';

export default function* oneClickSaga() {
  yield spawn(watchInitOneClick);
}

function* watchInitOneClick() {
  yield takeEvery(INIT_EPISODE, init);
}

function* init() {
  try {
     
  } catch (e) {
    console.error(e);
  }
}