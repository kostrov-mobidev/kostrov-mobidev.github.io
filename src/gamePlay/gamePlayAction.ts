export const gameLost = (payload: string) => {
  return {
    type: "GAME_LOST",
    payload,
  } as const;
};
