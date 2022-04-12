import React from "react";
import { MenuItem, SelectChangeEvent } from "@mui/material";
import Select from "@mui/material/Select";
import { WithStyles } from "@material-ui/core";

import styles from "./styles";
import { SelectOption } from "./types";

type Props = {
  isStarted: boolean;
  selectOptions: SelectOption[];
  handleLevelChange: (event: SelectChangeEvent<number>) => void;
} & WithStyles<typeof styles>;

const LevelSelect: React.FC<Props> = ({
  isStarted,
  handleLevelChange,
  classes,
  selectOptions,
}) => {
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
        {selectOptions.map((option: SelectOption) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        {/* <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem> */}
      </Select>
    </>
  );
};

export default LevelSelect;
