import { all, call, put, takeLatest } from "redux-saga/effects";

import { gameStarted } from "./fieldActions";
import { getMap } from "./fieldService";

function* updateMapSaga() {
  try {
    yield call(getMap);
  } catch (err) {
    console.log(err);
  }
}

function* gameStartedSaga() {
  try {
    yield call(getMap);
    yield put(gameStarted());
  } catch (err) {
    console.log(err);
  }
}

export default all([
  takeLatest<any>("GET_MAP", updateMapSaga),
  takeLatest<any>("INITIAL_GET_MAP", gameStartedSaga),
]);
