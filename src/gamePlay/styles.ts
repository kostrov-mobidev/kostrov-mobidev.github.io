import { createStyles } from "@material-ui/core";

export default () =>
  createStyles({
    appCont: {
      backgroundColor: "#282c34",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      color: "white",
      padding: 20,
    },
  });
