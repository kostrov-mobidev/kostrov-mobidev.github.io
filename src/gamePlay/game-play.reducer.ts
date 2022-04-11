import { ClickCellPayload } from "../cell/cellActions";
import { CellProps } from "../fieldRow/types";

export type InitialState = {
  started: boolean;
  map: CellProps[][];
  lost: boolean;
  lastClicked: ClickCellPayload | null;
};

const initialState: InitialState = {
  started: false,
  map: [],
  lost: false,
  lastClicked: null,
};

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

  return map;
};

export default function gamePlayReducer(state = initialState, action: any) {
  switch (action.type) {
    case "GAME_START": {
      const map = parseMap(action.payload);

      return { ...state, map, started: true };
    }

    case "UPDATE_MAP": {
      const map = parseMap(action.payload);

      return { ...state, map };
    }

    case "GAME_LOST": {
      const { x, y }: any = state.lastClicked;
      console.log(state.lastClicked);

      const newMap = state.map.map((row: CellProps[], yIndex) =>
        row.map((cell: CellProps, xIndex) => {
          return xIndex === x && yIndex === y
            ? { value: "*", uniqueId: xIndex }
            : { value: cell.value, uniqueId: xIndex };
        })
      );

      return { ...state, map: newMap, lost: true };
    }

    case "RESET_GAME": {
      return { ...initialState };
    }

    case "SET_LAST_CLICKED": {
      return { ...state, lastClicked: { ...action.payload } };
    }

    default: {
      return state;
    }
  }
}
