import React, { MouseEvent } from "react";
import { Button, WithStyles } from "@material-ui/core";

import styles from "./styles";
import { ButtonClasses } from "./types";

type Props = {
  disabled: boolean;
  content: string;
  classname: ButtonClasses;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
} & WithStyles<typeof styles>;

const ToolBarButton: React.FC<Props> = ({
  handleClick,
  content,
  classname,
  disabled,
  classes,
}) => {
  return (
    <Button
      disabled={disabled}
      className={classes[classname]}
      onClick={handleClick}
    >
      {content}
    </Button>
  );
};

export default ToolBarButton;
