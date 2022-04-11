import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";

import Field from "./Field";
import { startGame } from "../toolBar/toolBarActions";
import styles from "./styles";
import { AppState } from "../redux/store";
import { selectMap } from "../redux/selectors/gamePlay";

const mapDispatchToProps = {
  startGame,
};

const mapStateToProps = (state: AppState) => ({
  map: selectMap(state),
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Field)
);
