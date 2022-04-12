import { all, call, takeLatest } from "redux-saga/effects";

import { startGame } from "./toolBarService";
import { startGame as startGameAction } from "./toolBarActions";
import { NEW_GAME } from "./types";

function* newGameSaga(action: ReturnType<typeof startGameAction>) {
  try {
    yield call(startGame, action.payload);
  } catch (err) {
    console.log(err);
  }
}

export default all([takeLatest<any>(NEW_GAME, newGameSaga)]);
