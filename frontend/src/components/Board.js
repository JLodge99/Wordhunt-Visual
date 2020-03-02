import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, GridList, GridListTile } from "@material-ui/core";
import Tile from "./Tile";

const styles = theme => ({
  root: {
    height: 340,
    width: 340,
    display: "flex"
    // backgroundColor: 'transparent',
    // boxShadow: 'none',
  },
  tile: {
    height: 80,
    width: 80,
    display: "flex",
    backgroundColor: "#acfcba",
    alignItems: "center",
    justifyContent: "center",
    transition: "backgroundColor .3s"
  },
  tile_highlight: {
    height: 80,
    width: 80,
    display: "flex",
    backgroundColor: "#fdacac",
    alignItems: "center",
    justifyContent: "center",
    transition: "backgroundColor .3s"
  }
});

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: this.props, change: this.props.change };
  }

  render() {
    const { classes } = this.props;
    const { boardarry, handleInput } = this.props;
    return (
      <GridList
        cellHeight={80}
        component={Paper}
        elevation={5}
        className={classes.root}
        cols={4}
      >
        {boardarry.map((value, i) => (
          <GridListTile key={i} cols={1}>
            <Tile
              handleInput={handleInput}
              value={value}
              index={i}
            />
          </GridListTile>
        ))}
      </GridList>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Board);
