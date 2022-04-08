import { Container } from "@material-ui/core";
import React from "react";
import FieldRow from "../fieldRow";

const Field = ({
  state: {
    GamePlayReducer: { map },
  },
  classes,
}: any) => {
  if (!map) {
    return <></>;
  }

  return (
    <Container className={classes.cont}>
      {map.map((row: any, index: number) => (
        <FieldRow row={row} yCoordinate={index} />
      ))}
    </Container>
  );
};

export default Field;
