import { CLICK_CELL, SET_LAST_CLICKED } from "./types";

export const clickCell = (payload: ClickCellPayload) =>
  ({
    type: CLICK_CELL,
    payload,
  } as const);

export const setLastClicked = (payload: ClickCellPayload) =>
  ({
    type: SET_LAST_CLICKED,
    payload,
  } as const);

export type ClickCellPayload = { x: number; y: number };
