export const clickCell = (payload: any) => ({
  type: "CLICK_CELL",
  payload,
});

export const setLastClicked = (payload: any) => ({
  type: "SET_LAST_CLICKED",
  payload,
});
