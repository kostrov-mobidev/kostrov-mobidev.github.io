import { all, call, put, takeLatest } from "redux-saga/effects";
import { getMap, openField } from "./fieldService";
import { gameLost, gameStarted } from "./fieldActions";

function* openFieldSaga(action: any) {
  try {
    const { data } = yield call(openField, action.payload);
    // yield put(() => ({}));
  } catch (err) {
    // yield put(buildersPMsRequestFailed(err));
  }
}

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
  } catch (err) {}
}

function* gameLostSaga() {
  try {
    // yield call(getMap);
    // yield call(gameLost);
  } catch (err) {}
}

export default all([
  takeLatest<any>("OPEN_CELL", openFieldSaga),
  takeLatest<any>("GET_MAP", updateMapSaga),
  takeLatest<any>("INITIAL_GET_MAP", gameStartedSaga),
  // takeLatest<any>("GAME_LOST", gameLostSaga),
]);
