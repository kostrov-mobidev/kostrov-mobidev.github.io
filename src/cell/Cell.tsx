import { WithStyles } from "@material-ui/core";
import React, { MouseEvent, useState } from "react";
import { ClickCellPayload } from "./cellActions";
import styles from "./styles";

type Props = {
  lost: boolean;
  cell: string;
  clickCell: (payload: ClickCellPayload) => void;
  yCoordinate: number;
  xCoordinate: number;
  setLastClicked: (payload: ClickCellPayload) => void;
} & WithStyles<typeof styles>;

const Cell: React.FC<Props> = ({
  lost,
  cell,
  classes,
  clickCell,
  yCoordinate,
  xCoordinate,
  setLastClicked,
}) => {
  const [cleared, setCleared] = useState(false);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (cell || lost || cleared) return;
    setLastClicked({ x: xCoordinate, y: yCoordinate });
    clickCell({ x: xCoordinate, y: yCoordinate });
  };
  const handleClear = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCleared(!cleared);
  };

  return (
    <>
      <span
        className={classes.cell}
        onClick={handleClick}
        onContextMenu={handleClear}
      >
        {cleared ? <span className={classes.cleared}>x</span> : cell}
      </span>
    </>
  );
};

export default React.memo(Cell);
