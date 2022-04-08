import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import styles from "./styles";

import ToolBar from "./ToolBar";
import { startGame, resetGame } from "./toolBarActions";

const mapDispatchToProps = {
  startGame,
  resetGame,
};

const mapStateToProps = (state: any) => ({
  state,
  started: state.GamePlayReducer.started,
  lost: state.GamePlayReducer.lost,
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ToolBar)
);
