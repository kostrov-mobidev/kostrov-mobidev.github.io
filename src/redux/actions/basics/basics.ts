import { getMap, initialGetMap, updateMap } from "../../../field/fieldActions";
import { gameLost } from "../../../gamePlay/gamePlayAction";

const NEW_GAME_MSG = "new: OK";
const OPEN_OK_MSG = "open: OK";
const LOSE_MSG = "open: You lose";
const isNewGame = (payload: string) => payload === NEW_GAME_MSG;
const isMap = (payload: string) => payload.startsWith("map");
const isOpen = (payload: string) => payload === OPEN_OK_MSG;
const isLost = (payload: string) => payload === LOSE_MSG;

export const handleGameAction = (payload: string) => {
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
