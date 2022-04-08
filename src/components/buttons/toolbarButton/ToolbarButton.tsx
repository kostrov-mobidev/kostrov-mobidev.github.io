import { Button } from "@material-ui/core";
import React from "react";

const ToolBarButton = ({
  handleClick,
  content,
  classname,
  disabled,
  classes,
}: any) => {
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
