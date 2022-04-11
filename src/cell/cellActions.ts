export const clickCell = (payload: ClickCellPayload) => ({
  type: "CLICK_CELL",
  payload,
});

export const setLastClicked = (payload: ClickCellPayload) => ({
  type: "SET_LAST_CLICKED",
  payload,
});

export type ClickCellPayload = { x: number; y: number };
