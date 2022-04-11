import { NEW_GAME, RESET_GAME } from "./types";

export const startGame = (level: number) =>
  ({
    type: NEW_GAME,
    payload: level,
  } as const);

export const resetGame = () =>
  ({
    type: RESET_GAME,
  } as const);
