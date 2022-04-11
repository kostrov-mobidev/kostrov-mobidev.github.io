import { all, call, takeLatest } from "redux-saga/effects";
import { getMap } from "./fieldService";
import { gameStarted } from "./fieldActions";

function* updateMapSaga() {
  try {
    yield call(getMap);
  } catch (err) {
    console.log(err);
  }
}

function* gameStartedSaga() {
  try {
    yield call(gameStarted);
    yield call(getMap);
  } catch (err) {
    console.log(err);
  }
}

export default all([
  takeLatest<any>("GET_MAP", updateMapSaga),
  takeLatest<any>("INITIAL_GET_MAP", gameStartedSaga),
]);
