import { SOCKET_API } from "./constants";

export const socket = new WebSocket(SOCKET_API);

const connectSocket = () => socket;

export default connectSocket;
