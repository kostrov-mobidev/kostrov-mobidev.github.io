import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";

import Cell from "./Cell";
import styles from "./styles";
import { clickCell, setLastClicked } from "./cellActions";

const mapDispatchToProps = {
  clickCell,
  setLastClicked,
};

const mapStateToProps = (state: any) => ({
  lost: state.GamePlayReducer.lost,
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Cell)
);
