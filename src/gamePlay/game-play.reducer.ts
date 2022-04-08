const initialState = {
  started: false,
  map: [],
  lost: false,
  lastClicked: null,
};

const parseMap = (payload: string) => {
  const parsedData = payload ? payload.split(/\n/g) : [];
  parsedData.shift();

  const map = parsedData.map((el: any) => {
    const cells = el.split("");
    return cells.map((cell: any) => {
      if (!isNaN(cell)) {
        return +cell;
      } else {
        return cell === "*" ? "*" : "";
      }
    });
  });

  return map;
};

export default function GamePlayReducer(state = initialState, action: any) {
  switch (action.type) {
    case "INITIAL_GET_MAP": {
      const map = parseMap(action.payload);

      return { ...state, map, started: true };
    }

    case "UPDATE_MAP": {
      const map = parseMap(action.payload);

      return { ...state, map };
    }

    case "GAME_LOST": {
      console.log("reducer game lost");

      const { x, y }: any = state.lastClicked;
      const newMap = state.map.map((row: string[], yIndex) =>
        row.map((cell: string, xIndex) => {
          return xIndex === x && yIndex === y ? "*" : cell;
        })
      );
      return { ...state, map: newMap, lost: true };
    }

    case "RESET_GAME": {
      return { ...initialState };
    }

    case "SET_LAST_CLICKED": {
      console.log("last clicked", action.payload);

      return { ...state, lastClicked: { ...action.payload } };
    }

    default: {
      return state;
    }
  }
}
