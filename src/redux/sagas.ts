import * as gameSagas from "./game/gameSaga";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([...Object.values(gameSagas)].map(fork));
}
