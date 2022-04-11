import { socket } from "../socket";

export const getMap = () => {
  return socket.send("map");
};
