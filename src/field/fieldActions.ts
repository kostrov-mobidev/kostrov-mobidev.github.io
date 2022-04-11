import { GAME_START, GET_MAP, INITIAL_GET_MAP, UPDATE_MAP } from "./types";

export const gameStarted = () => {
  return {
    type: GAME_START,
  } as const;
};

export const getMap = (payload: string) => {
  return {
    type: GET_MAP,
    payload,
  } as const;
};

export const initialGetMap = (payload: string) => {
  return {
    type: INITIAL_GET_MAP,
    payload,
  } as const;
};

export const updateMap = (payload: string) => {
  return {
    type: UPDATE_MAP,
    payload,
  } as const;
};
