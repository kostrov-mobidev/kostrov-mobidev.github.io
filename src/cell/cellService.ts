import { socket } from "../socket";
import { ClickCellPayload } from "./cellActions";

export const openCell = ({ x, y }: ClickCellPayload) => {
  return socket.send(`open ${x} ${y}`);
};
