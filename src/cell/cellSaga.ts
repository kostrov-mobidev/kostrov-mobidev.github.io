import { all, call, takeLatest } from "redux-saga/effects";

import { openCell } from "./cellService";
import { clickCell } from "./cellActions";
import { CLICK_CELL } from "./types";

function* clickCellSaga(action: ReturnType<typeof clickCell>) {
  try {
    yield call(openCell, action.payload);
  } catch (err) {
    console.log(err);
  }
}

export default all([takeLatest<any>(CLICK_CELL, clickCellSaga)]);
