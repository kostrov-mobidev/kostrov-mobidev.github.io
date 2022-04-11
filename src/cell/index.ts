import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";

import Cell from "./Cell";
import styles from "./styles";
import { clickCell, setLastClicked } from "./cellActions";
import { selectLostState } from "../redux/selectors/gamePlay";
import { AppState } from "../redux/store";

const mapDispatchToProps = {
  clickCell,
  setLastClicked,
};

const mapStateToProps = (state: AppState) => ({
  lost: selectLostState(state),
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Cell)
);
