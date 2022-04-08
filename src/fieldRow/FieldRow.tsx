import React from "react";
import Cell from "../cell";

const FieldRow = ({ row, classes, yCoordinate }: any) => {
  return (
    <div className={classes.row}>
      {row.map((cell: any, index: number) => (
        <Cell cell={cell} yCoordinate={yCoordinate} xCoordinate={index} />
      ))}
    </div>
  );
};

export default FieldRow;
