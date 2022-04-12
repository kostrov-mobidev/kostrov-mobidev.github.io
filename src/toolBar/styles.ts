import { createStyles } from "@material-ui/core";

const styles = () =>
  createStyles({
    appBar: {
      display: "flex",
      flexDirection: "row",
    },
    buttonCont: {
      display: "flex",
      width: "55%",
      justifyContent: "space-between",
    },
    buttonGroup: {
      width: 150,
      display: "flex",
      justifyContent: "space-between",
    },
    levelSelect: {
      backgroundColor: "#A9A9A9",
      width: 20,
    },
    lostMsg: {
      display: "flex",
      marginLeft: 60,
      flexDirection: "column",
      justifyContent: "center",
      fontSize: 24,
    },
    levelLabel: {
      marginRight: "15px",
    },
  });

export default styles;
