import ReconnectingWebSocket from "reconnecting-websocket";

import { SOCKET_API } from "./constants";

export const socket = new ReconnectingWebSocket(SOCKET_API);

const connectSocket = () => socket;

export default connectSocket;
