import { spawn, all } from "redux-saga/effects";
import init from "./init";

const sagas = [init];

export default function* rootSaga() {
  yield all(sagas.map((saga) => spawn(saga)));
}
