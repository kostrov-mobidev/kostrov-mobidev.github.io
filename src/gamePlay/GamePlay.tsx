import React from "react";
import { WithStyles } from "@material-ui/core";

import Field from "../field";
import styles from "./styles";
import ToolBar from "../toolBar";

type Props = {} & WithStyles<typeof styles>;

const GamePlay: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.appCont}>
      <ToolBar />
      <Field />
    </div>
  );
};

export default GamePlay;
