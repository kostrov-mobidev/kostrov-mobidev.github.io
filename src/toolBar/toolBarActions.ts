export const startGame = (level: number) => ({
  type: "NEW_GAME",
  payload: level,
});

export const resetGame = () => ({
  type: "RESET_GAME",
});
