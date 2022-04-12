import { eventChannel } from "redux-saga";
import { take, put, call } from "redux-saga/effects";
import ReconnectingWebSocket, { ErrorEvent } from "reconnecting-websocket";

import createWebSocketConnection from "../../socket";
import { handleGameAction } from "../actions/basics/basics";

const createConnection = (socket: ReconnectingWebSocket) =>
  eventChannel((emit) => {
    const onMessage = (event: MessageEvent<any>) => {
      emit(event.data);
    };
    socket.onmessage = onMessage;
    socket.onerror = function (error: ErrorEvent) {
      console.log(`[error] ${error}`);
    };

    return () => socket.close();
  });

function* watchOnActions(): any {
  const socket = yield call(createWebSocketConnection);
  const socketChannel = yield call(createConnection, socket);

  while (true) {
    try {
      const payload = yield take(socketChannel);
      yield put(handleGameAction(payload));
    } catch (err) {
      console.error("socket error:", err);
    }
  }
}

export default watchOnActions;
