import React from "react";
import { WithStyles } from "@material-ui/core";

import Cell from "../cell";
import styles from "./styles";

type Props = { yCoordinate: number; row: string[] } & WithStyles<typeof styles>;

const FieldRow: React.FC<Props> = ({ row, classes, yCoordinate }) => {
  return (
    <div className={classes.row}>
      {row.map((cell: string, index: number) => (
        <Cell cell={cell} yCoordinate={yCoordinate} xCoordinate={index} />
      ))}
    </div>
  );
};

export default FieldRow;
