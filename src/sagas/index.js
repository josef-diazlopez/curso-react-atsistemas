import { spawn, all } from "redux-saga/effects";
import init from "./init";
import episode from './episode'
import home from './home'

const sagas = [init, episode, home];

export default function* rootSaga() {
  yield all(sagas.map((saga) => spawn(saga)));
}
