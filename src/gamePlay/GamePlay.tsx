import React from "react";
import Field from "../field";
import ToolBar from "../toolBar";

const GamePlay = ({ classes }: any) => {
  return (
    <div className={classes.appCont}>
      <ToolBar />
      <Field />
    </div>
  );
};

export default GamePlay;
