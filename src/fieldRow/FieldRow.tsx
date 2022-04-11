import React from "react";
import { WithStyles } from "@material-ui/core";

import Cell from "../cell";
import styles from "./styles";
import { CellProps } from "./types";

type Props = {
  yCoordinate: number;
  row: CellProps[];
} & WithStyles<typeof styles>;

const FieldRow: React.FC<Props> = ({ row, classes, yCoordinate }) => {
  return (
    <div className={classes.row}>
      {row.map((cell: CellProps, index: number) => (
        <Cell
          key={cell.uniqueId}
          cell={cell.value}
          yCoordinate={yCoordinate}
          xCoordinate={index}
        />
      ))}
    </div>
  );
};

export default FieldRow;
