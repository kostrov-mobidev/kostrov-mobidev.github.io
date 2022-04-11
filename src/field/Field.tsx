import { Container, WithStyles } from "@material-ui/core";
import React from "react";
import FieldRow from "../fieldRow";
import { ReturnHandleMapType } from "../gamePlay/types";
import styles from "./styles";

type Props = { map: ReturnHandleMapType[] } & WithStyles<typeof styles>;

const Field: React.FC<Props> = ({ map, classes }) => {
  if (!map) {
    return <></>;
  }

  return (
    <Container className={classes.cont}>
      {map.map((row: ReturnHandleMapType, index: number) => (
        <FieldRow key={row.uniqueId} row={row.value} yCoordinate={index} />
      ))}
    </Container>
  );
};

export default Field;
