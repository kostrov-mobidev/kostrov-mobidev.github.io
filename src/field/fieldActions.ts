export const openFIeldSuccess = (payload: any) => ({
  type: "OPEN_SUCCESS",
  payload,
});

export const getMap = () => ({
  type: "GET_MAP",
});

export const gameStarted = () => {
  return {
    type: "GAME_START",
  };
};

export const gameLost = () => {
  return {
    type: "GAME_END",
  };
};
