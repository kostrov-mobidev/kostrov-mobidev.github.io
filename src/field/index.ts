import { connect } from "react-redux";

import Field from "./Field";
import { startGame } from "../toolBar/toolBarActions";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

const mapDispatchToProps = {
  startGame,
};

const mapStateToProps = (state: any) => ({
  state,
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Field)
);
