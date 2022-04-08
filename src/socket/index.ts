import { SOCKET_API } from "./constants";

export const socket = new WebSocket(SOCKET_API);

export default () => socket;
