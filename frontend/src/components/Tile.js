import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    height: 80,
    width: 80, 
    display: "flex",
    backgroundColor: '#acfcba',
    alignItems: "center",
    justifyContent: "center",
    
  }
});

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    const {value} = this.props;
    return (
      <div className={classes.root}>
        <span style={{ fontSize: "40px" }}>{value}</span>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Tile);
