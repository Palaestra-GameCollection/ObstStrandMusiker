import { takeLatest, all, put } from "redux-saga/effects";
import { FETCH_DATA_REQUESTED, fetchDataFinished } from "./gameActions";
import { CardData } from "../../contracts/game";

function* fetchData() {
  try {
    const [words, cards]: [Array<string>, Array<CardData>] = yield all([
      fetch("/data/words.json").then((response) => response.json()),
      fetch("/data/cards.json").then((response) => response.json()),
    ]);

    yield put(fetchDataFinished(words, cards));
  } catch (e) {
    console.error(e);
  }
}

function* gameSaga() {
  yield takeLatest(FETCH_DATA_REQUESTED, fetchData);
}

export default gameSaga;
