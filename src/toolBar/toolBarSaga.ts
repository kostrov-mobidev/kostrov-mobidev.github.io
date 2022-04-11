import { all, call, put, takeLatest } from "redux-saga/effects";

import { startGame } from "./toolBarService";
import { NEW_GAME } from "./types";

function* newGameSaga(action: any) {
  try {
    yield call(startGame, action.payload);
  } catch (err) {
    console.log(err);
  }
}

export default all([takeLatest<any>(NEW_GAME, newGameSaga)]);
