import { socket } from "../socket";

export const startGame = (payload: number) => {
  return socket.send(`new ${payload}`);
};
