import React from "react";
import { MenuItem, Select } from "@material-ui/core";

const LevelSelect = ({ isStarted, handleLevelChange, classes }: any) => {
  return (
    <>
      <Select
        label="Level"
        onChange={handleLevelChange}
        className={classes.levelSelect}
        defaultValue={1}
        disabled={isStarted}
        autoWidth
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
    </>
  );
};

export default LevelSelect;
