import { createSelector } from "reselect";
import { InitialState } from "../../gamePlay/game-play.reducer";
import { AppState } from "../store";

const selectBasicState = (state: AppState) => state.gamePlayReducer;
const selectLost = (gamePlayState: InitialState) => gamePlayState.lost;
const selectMapState = (gamePlayState: InitialState) => gamePlayState.map;

export const selectLostState = createSelector(selectBasicState, selectLost);
export const selectMap = createSelector(selectBasicState, selectMapState);
