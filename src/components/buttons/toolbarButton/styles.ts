import { createStyles } from "@material-ui/core";

const styles = () =>
  createStyles({
    btn: {
      width: 50,
    },
    start: {
      backgroundColor: "#ADFF2F",
      "&:hover": {
        border: "none",
        backgroundColor: "#ADFF2F",
      },
    },
    reset: {
      backgroundColor: "#CD5C5C",
      "&:hover": {
        border: "none",
        backgroundColor: "#CD5C5C",
      },
    },
  });

export default styles;
