import { take, put, call } from "redux-saga/effects";
import { eventChannel } from "redux-saga";

import createWebSocketConnection from "../../socket";
import { handleGameAction } from "../actions/basics/basics";

const createConnection = (socket: any): any =>
  eventChannel((emit) => {
    socket.onopen = function (e: any) {};

    const onMessage = (event: any) => {
      emit(event.data);
    };
    socket.onmessage = onMessage;
    socket.onerror = function (error: any) {
      console.log(`[error] ${error}`);
    };

    return () => socket.close();
  });

function* watchOnActions(): any {
  const socket: any = yield call(createWebSocketConnection);
  const socketChannel: any = yield call(createConnection, socket);

  while (true) {
    try {
      const payload: any = yield take(socketChannel);
      yield put(handleGameAction(payload));
    } catch (err) {
      console.error("socket error:", err);
    }
  }
}

export default watchOnActions;
