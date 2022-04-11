import * as CellActions from "../cell/cellActions";
import * as FieldActions from "../field/fieldActions";
import * as GamePlayActions from "./gamePlayAction";
import { CellProps } from "../fieldRow/types";
import * as ToolBarActions from "../toolBar/toolBarActions";

export const GAME_LOST = "GAME_LOST";
export type ValueOf<T> = T[keyof T];
export type CellActionTypes = ReturnType<ValueOf<typeof CellActions>>;
export type RowActionsTypes = ReturnType<ValueOf<typeof FieldActions>>;
export type ToolBarActionTypes = ReturnType<ValueOf<typeof ToolBarActions>>;
export type GamePlayActionType = ReturnType<ValueOf<typeof GamePlayActions>>;

export type GamePlayActionTypes =
  | CellActionTypes
  | RowActionsTypes
  | ToolBarActionTypes
  | GamePlayActionType;

export type ReturnHandleMapType = { value: CellProps[]; uniqueId: number };
