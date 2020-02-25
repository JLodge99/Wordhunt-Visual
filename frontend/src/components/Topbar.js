import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  root: {
    height: "100vh"
  }
});

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, dict } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">News</Typography>
          <Button variant="contained" color="secondary" onClick={() => {

fetch('./assets/usa.txt')
.then((r) => r.text())
.then(text  => {
  console.log(text);
})  
} }>
            Secondary
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TopBar);
