import { ClickCellPayload } from "../cell/cellActions";
import { SET_LAST_CLICKED } from "../cell/types";
import { GAME_STARTED, UPDATE_MAP } from "../field/types";
import { CellProps } from "../fieldRow/types";
import { RESET_GAME } from "../toolBar/types";
import { GamePlayActionTypes, GAME_LOST, ReturnHandleMapType } from "./types";

export type InitialState = {
  started: boolean;
  map: ReturnHandleMapType[];
  lost: boolean;
  lastClicked: ClickCellPayload;
};

const initialState: InitialState = {
  started: false,
  map: [],
  lost: false,
  lastClicked: { x: null, y: null },
};

const handleMap = (map: CellProps[][]): ReturnHandleMapType[] =>
  map.map((item: CellProps[], index: number) => {
    return { value: item, uniqueId: index };
  });

const parseMap = (payload: string) => {
  const parsedData = payload ? payload.split(/\n/g) : [];
  parsedData.shift();

  const map = parsedData.map((el: string) => {
    const cells = el.split("");
    return cells.map((cell: string, index: number) => {
      if (!isNaN(+cell)) {
        return { value: `${+cell}`, uniqueId: index };
      } else {
        return { value: cell === "*" ? "*" : "", uniqueId: index };
      }
    });
  });

  return handleMap(map);
};

export default function gamePlayReducer(
  state: InitialState = initialState,
  action: GamePlayActionTypes
) {
  switch (action.type) {
    case GAME_STARTED: {
      return { ...state, started: true };
    }

    case UPDATE_MAP: {
      const map = parseMap(action.payload);

      return { ...state, map };
    }

    case GAME_LOST: {
      const { x, y }: ClickCellPayload = state.lastClicked;
      const newMap: ReturnHandleMapType[] = state.map.map(
        (row: ReturnHandleMapType, yIndex) => {
          return {
            value: row.value.map((cell: CellProps, xIndex) => {
              return xIndex === x && yIndex === y
                ? { value: "*", uniqueId: xIndex }
                : { value: cell.value, uniqueId: xIndex };
            }),
            uniqueId: row.uniqueId,
          };
        }
      );

      return { ...state, map: newMap, lost: true };
    }

    case RESET_GAME: {
      return { ...initialState };
    }

    case SET_LAST_CLICKED: {
      return { ...state, lastClicked: { ...action.payload } };
    }

    default: {
      return state;
    }
  }
}
