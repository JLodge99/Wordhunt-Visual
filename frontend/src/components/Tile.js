import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    height: 80,
    width: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#acfcba"
  },
  inputtext: {
    fontSize: "40px",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    border: "none",
    textAlign: "center",
    outline: "none"
  }
});

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      index: this.props.index
    };
  }

  handleChange = e => {
    const value = e.target.value;
    console.log(e.currentTarget);
    this.props.handleInput(value, this.props.index);
  };

  render() {
    const { classes, value } = this.props;
    const { color } = this.state;
    return (
      <div className={classes.root}>
        <input
          className={classes.inputtext}
          maxLength="1"
          onChange={this.handleChange}
          defaultValue={value}
        ></input>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Tile);
