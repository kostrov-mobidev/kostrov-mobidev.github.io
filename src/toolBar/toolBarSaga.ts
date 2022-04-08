import { all, call, put, takeLatest } from "redux-saga/effects";

import { startGame } from "./toolBarService";

function* newGameSaga(action: any) {
  try {
    yield call(startGame, action.level);
  } catch (err) {
    // yield put(buildersPMsRequestFailed(err));
  }
}

export default all([takeLatest<any>("NEW_GAME", newGameSaga)]);
