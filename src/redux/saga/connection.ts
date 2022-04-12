import { take, put, call } from "redux-saga/effects";
import { eventChannel } from "redux-saga";

import createWebSocketConnection from "../../socket";
import { handleGameAction } from "../actions/basics/basics";

const createConnection = (socket: any): any =>
  eventChannel((emit) => {
    socket.onopen = function (e: any) {
      console.log("[open] Соединение установлено");
      console.log("Отправляем данные на сервер");
      socket.send("help");
    };

    const onMessage = (event: any) => {
      emit(event.data);
    };
    socket.onmessage = onMessage;
    socket.onclose = function (event: any) {
      if (event.wasClean) {
        console.log(
          `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
        );
      } else {
        console.log("[close] Соединение прервано");
      }
    };

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
      // An error from socketChannel will cause the saga jump to the catch block
      const payload: any = yield take(socketChannel);
      yield put(handleGameAction(payload));
      //   yield fork(pong, socket);
    } catch (err) {
      console.error("socket error:", err);
      // socketChannel is still open in catch block
      // if we want end the socketChannel, we need close it explicitly
      // socketChannel.close()
    }
  }
}

export default watchOnActions;
