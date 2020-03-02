import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, List, ListItem, Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: 300,
    height: 650,
    maxHeight: 650,
    maxWidth: 300,
    position: "relative",
    overflow: "auto"
    // backgroundColor: 'transparent',
  },
  text: {
    width: "100%",
    transition: "color .3s",
    fontSize: 20,
    "&:hover": {
      color: "red"
    }
  }
});

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      boardarry: [5, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    });
  }

  render() {
    const { classes, words } = this.props;

    return (
      <List component={Paper} elevation={6} border={1} className={classes.root}>
        {words.map((word, i) => (
          <ListItem key={i}>
            <Typography className={classes.text} align="center">
              {word.word}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Board);
