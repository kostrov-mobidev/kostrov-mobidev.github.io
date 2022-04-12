import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { selectLostState, selectStarted } from "../redux/selectors/gamePlay";
import { AppState } from "../redux/store";
import styles from "./styles";

import ToolBar from "./ToolBar";
import { startGame, resetGame } from "./toolBarActions";

const mapDispatchToProps = {
  startGame,
  resetGame,
};

const mapStateToProps = (state: AppState) => ({
  started: selectStarted(state),
  lost: selectLostState(state),
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ToolBar)
);
