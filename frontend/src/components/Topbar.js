import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";

const styles = theme => ({
  root: {
    height: "100vh"
  }
});

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [5,4,8,5,4,5]
    };
  }

  test = () => {
    const board = "Ihatethis";
    const payload = {
			"board": {board}
		}

    console.log(payload);
    axios
      .get("/api/solve", JSON.stringify.board)
      .then(response => console.log("whatthe"))
      .catch(err => console.log("Error"));
  };

  render() {
    const { classes, dict } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">News</Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => this.test()}
          >
            Secondary
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TopBar);
