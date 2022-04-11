import { Container, WithStyles } from "@material-ui/core";
import React from "react";
import FieldRow from "../fieldRow";
import { CellProps } from "../fieldRow/types";
import styles from "./styles";

type Props = { map: CellProps[][] } & WithStyles<typeof styles>;

const Field: React.FC<Props> = ({ map, classes }) => {
  if (!map) {
    return <></>;
  }

  return (
    <Container className={classes.cont}>
      {map.map((row: CellProps[], index: number) => (
        <FieldRow row={row} yCoordinate={index} />
      ))}
    </Container>
  );
};

export default Field;
