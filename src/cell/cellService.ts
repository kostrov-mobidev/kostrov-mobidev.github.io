import { socket } from "../socket";

export const openCell = ({ x, y }: any) => {
  return socket.send(`open ${x} ${y}`);
};
