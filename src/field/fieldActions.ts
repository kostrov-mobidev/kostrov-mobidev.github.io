export const gameStarted = () => {
  return {
    type: "GAME_START",
  };
};

export const getMap = (payload: string) => {
  return {
    type: "GET_MAP",
    payload,
  };
};

export const initialGetMap = (payload: string) => {
  return {
    type: "INITIAL_GET_MAP",
    payload,
  };
};

export const updateMap = (payload: string) => {
  return {
    type: "UPDATE_MAP",
    payload,
  };
};
