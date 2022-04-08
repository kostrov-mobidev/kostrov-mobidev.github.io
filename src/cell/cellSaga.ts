import { all, call, put, takeLatest } from "redux-saga/effects";

import { setLastClicked } from "./cellActions";
import { openCell } from "./cellService";

function* clickCellSaga(action: any) {
  try {
    yield call(openCell, action.payload);
    //   put(setLastClicked(action.payload));
  } catch (err) {
    // yield put(buildersPMsRequestFailed(err));
  }
}

export default all([takeLatest<any>("CLICK_CELL", clickCellSaga)]);
