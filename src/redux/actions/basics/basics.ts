import { getMap, initialGetMap, updateMap } from "../../../field/fieldActions";
import { gameLost } from "../../../gamePlay/gamePlayAction";

const NEW_GAME = "new: OK";
const OPEN_OK = "open: OK";
const LOSE = "open: You lose";
const isNewGame = (payload: string) => payload === NEW_GAME;
const isMap = (payload: string) => payload.startsWith("map");
const isOpen = (payload: string) => payload === OPEN_OK;
const isLost = (payload: string) => payload === LOSE;

export const handleGameAction = (payload: any) => {
  if (isNewGame(payload)) {
    return initialGetMap(payload);
  }

  if (isMap(payload)) {
    return updateMap(payload);
  }

  if (isOpen(payload)) {
    return getMap(payload);
  }

  if (isLost(payload)) {
    return gameLost(payload);
  }

  return { type: "DEFAULT" };
};
