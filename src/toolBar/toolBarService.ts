import { socket } from "../socket";

export const startGame = (payload: any) => {
  console.log(payload);

  return socket.send(`new ${payload}`);
};
