import * as CellActions from "../cell/cellActions";
import * as FieldActions from "../field/fieldActions";
import { CellProps } from "../fieldRow/types";
import * as ToolBarActions from "../toolBar/toolBarActions";

export type ValueOf<T> = T[keyof T];
export type CellActionTypes = ReturnType<ValueOf<typeof CellActions>>;
export type RowActionsTypes = ReturnType<ValueOf<typeof FieldActions>>;
export type ToolBarActionTypes = ReturnType<ValueOf<typeof ToolBarActions>>;

export type GamePlayActionTypes = CellActionTypes;
//   | RowActionsTypes
//   | ToolBarActionTypes;

export type ReturnHandleMapType = { value: CellProps[]; uniqueId: number };
