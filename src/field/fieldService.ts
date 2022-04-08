import { socket } from "../socket";

export const openField = (payload: any) => {
  return socket.send(`open ${payload.x} ${payload.y}`);
};

export const getMap = () => {
  return socket.send("map");
};
