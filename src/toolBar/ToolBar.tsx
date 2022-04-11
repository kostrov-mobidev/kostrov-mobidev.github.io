import { AppBar, Toolbar, ButtonGroup, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { LevelSelect, ToolbarButton, If } from "../components";

const ToolBar = ({
  startGame,
  state,
  classes,
  resetGame,
  started,
  lost,
}: any) => {
  const [level, setLevel] = useState(1);
  const handleStart = () => {
    startGame(level);
  };
  const handleReset = () => {
    resetGame();
  };
  const handleLevelChange = (event: any) => {
    setLevel(event.target.value);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.buttonCont}>
        <Typography>
          <span>Select Level</span>
          <LevelSelect
            isStarted={state.gamePlayReducer.started}
            handleLevelChange={handleLevelChange}
          />
        </Typography>
        <ButtonGroup className={classes.buttonGroup}>
          <ToolbarButton
            handleClick={handleStart}
            content={"Start"}
            classname={"start"}
            disabled={started}
          />
          <ToolbarButton
            handleClick={handleReset}
            content={"Reset"}
            classname={"reset"}
            disabled={!lost}
          />
        </ButtonGroup>
      </Toolbar>
      <If condition={state.gamePlayReducer.lost}>
        <div className={classes.lostMsg}>You Lost!</div>
      </If>
    </AppBar>
  );
};

export default ToolBar;