export const startGame = (level: number) => ({
  type: "NEW_GAME",
  level,
});

export const resetGame = () => ({
  type: "RESET_GAME",
});
