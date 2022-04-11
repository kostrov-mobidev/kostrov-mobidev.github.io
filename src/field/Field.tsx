import { Container, WithStyles } from "@material-ui/core";
import React from "react";
import FieldRow from "../fieldRow";
import styles from "./styles";

type Props = { map: string[][] } & WithStyles<typeof styles>;

const Field: React.FC<Props> = ({ map, classes }) => {
  if (!map) {
    return <></>;
  }

  return (
    <Container className={classes.cont}>
      {map.map((row: string[], index: number) => (
        <FieldRow row={row} yCoordinate={index} />
      ))}
    </Container>
  );
};

export default Field;
