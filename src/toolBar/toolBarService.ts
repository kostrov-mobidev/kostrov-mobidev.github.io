import { socket } from "../socket";

export const startGame = (payload: any) => {
  return socket.send(`new ${payload}`);
};
