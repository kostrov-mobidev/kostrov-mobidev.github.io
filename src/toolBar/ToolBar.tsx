import {
  AppBar,
  Toolbar,
  ButtonGroup,
  Typography,
  WithStyles,
} from "@material-ui/core";
import React, { useState } from "react";

import styles from "./styles";
import { LevelSelect, ToolbarButton, If } from "../components";
import { SelectChangeEvent } from "@mui/material";
import { levelSelectOptions } from "./constants";

type Props = {
  startGame: (level: number) => void;
  resetGame: () => void;
  started: boolean;
  lost: boolean;
} & WithStyles<typeof styles>;

const ToolBar: React.FC<Props> = ({
  startGame,
  classes,
  resetGame,
  started,
  lost,
}) => {
  const [level, setLevel] = useState(1);
  const handleStart = () => {
    startGame(level);
  };
  const handleReset = () => {
    resetGame();
  };
  const handleLevelChange = (event: SelectChangeEvent<number>) => {
    setLevel(+event.target.value);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.buttonCont}>
        <Typography>
          <span className={classes.levelLabel}>Select Level</span>
          <LevelSelect
            isStarted={started}
            selectOptions={levelSelectOptions}
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
            disabled={!started}
          />
        </ButtonGroup>
      </Toolbar>
      <If condition={lost}>
        <div className={classes.lostMsg}>You Lost!</div>
      </If>
    </AppBar>
  );
};

export default ToolBar;
