import { all, fork } from "redux-saga/effects";

import watchOnActions from "./connection";
import toolBar from "../../toolBar/toolBarSaga";
import fieldSaga from "../../field/fieldSaga";
import cellSaga from "../../cell/cellSaga";

export default function* rootSaga() {
  yield fork(watchOnActions);
  yield all([toolBar, fieldSaga, cellSaga]);
}
