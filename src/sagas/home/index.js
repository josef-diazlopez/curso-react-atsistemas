import { spawn, takeEvery, call, put, select } from "redux-saga/effects";
import { INIT_HOME } from "../../actions/flow";
import {
  INIT_HOME_LOADED_CHARACTERS,
  INIT_HOME_LOADED_MURDERS,
  INIT_HOME_LOADED_TEMPS,
} from "../../actions/home";
import api from "../../api";

export default function* homeSaga() {
  yield spawn(watchInitHome);
}

function* watchInitHome() {
  yield takeEvery(INIT_HOME, getTemps);
  yield takeEvery(INIT_HOME, getChars);
  yield takeEvery(INIT_HOME, getMurders);
}

export function* getTemps() {
  try {
    const response = yield call(api.home.getTemps);
    response.data.forEach(x => x.season = x.season.trim());
    yield put({ type: INIT_HOME_LOADED_TEMPS, payload: {episodes: response.data} });
  } catch (e) {
    console.error(e);
  }
}

export function* getChars() {
  try {
    const response = yield call(api.home.getChars);
    yield put({ type: INIT_HOME_LOADED_CHARACTERS, payload: {characters: response.data} });
  } catch (e) {
    console.error(e);
  }
}

export function* getMurders() {
  try {
    const response = yield call(api.home.getMurderers);
    yield put({ type: INIT_HOME_LOADED_MURDERS, payload: {deaths : response.data} });
  } catch (e) {
    console.error(e);
  }
}
