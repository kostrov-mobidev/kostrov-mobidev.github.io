const NEW_GAME = "new: OK";
const OPEN_OK = "open: OK";
const LOSE = "open: You lose";
const isNewGame = (payload: string) => payload === NEW_GAME;
const isMap = (payload: string) => payload.startsWith("map");
const isOpen = (payload: string) => payload === OPEN_OK;
const isLost = (payload: string) => payload === LOSE;

export const handleGameAction = (payload: any) => {
  if (isNewGame(payload)) {
    return {
      type: "INITIAL_GET_MAP",
      payload,
    };
  }

  if (isMap(payload)) {
    return {
      type: "UPDATE_MAP",
      payload,
    };
  }

  if (isOpen(payload)) {
    return {
      type: "GET_MAP",
      payload,
    };
  }

  if (isLost(payload)) {
    return {
      type: "GAME_LOST",
      payload,
    };
  }

  return { type: "DEFAULT" };
};
