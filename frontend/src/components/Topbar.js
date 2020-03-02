import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    height: "100vh"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [5, 4, 8, 5, 4, 5]
    };
  }

  render() {
    const { classes, handleSolve } = this.props;
    return (
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleSolve()}
          >
            Run
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TopBar);
