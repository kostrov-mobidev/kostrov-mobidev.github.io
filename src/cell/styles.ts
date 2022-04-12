import { Theme, createStyles } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    cell: {
      height: 20,
      width: 20,
      backgroundColor: "#A9A9A9",
      border: "1px solid black",
      borderRadius: "15%",
      cursor: "pointer",
      fontSize: 16,
      textAlign: "center",
    },
    cleared: {
      color: "red",
    },
  });

export default styles;
