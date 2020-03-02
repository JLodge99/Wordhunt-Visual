import React, { Component } from "react";
import Board from "./components/Board.js";
import Topbar from "./components/Topbar";
import Output from "./components/Output";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      boardarry: [],
      tileboard: null,
      words: [],
      loading: false,
      currentIndex: null,
      change: false
    };
  }

  componentDidMount() {
    axios
      .get("/api/startUp")
      .then(response => console.log(response))
      .catch(err => console.log("Error"));
    this.setState({
      boardarry: [
        "a",
        "e",
        "i",
        "n",
        "d",
        "t",
        "t",
        "h",
        "c",
        "r",
        "e",
        "l",
        "u",
        "n",
        "r",
        "l"
      ]
    });
  }

  handleSolve = () => {
    const { boardarry } = this.state;
    const payload = { board: boardarry };
    console.log("lol");
    this.setState({
      loading: true
    });
    axios
      .post("/api/solve", payload)
      .then(response => {
        console.log(response);
        this.setState({ words: response.data, loading: false });
        console.log("done");
      })
      .catch(err => console.log("Error"));
  };

  handleInput = (data, index) => {
    const { boardarry } = this.state;
    let newboard = [...boardarry];
    console.log(data);
    console.log(index);
    newboard[index] = data;
    this.setState({
      boardarry: newboard
    });
    console.log(this.state.boardarry);
  };

  handleLoading = () => {
    const { loading } = this.state;

    if (loading)
      return (
        <LinearProgress
          variant="indeterminate"
          color="secondary"
        ></LinearProgress>
      );
    return null;
  };

  render() {
    const { boardarry, words, change } = this.state;
    const Loadbar = this.handleLoading;
    return (
      <div style={{ height: "100vh" }}>
        <CssBaseline />
        <div style={{ height: "10vh" }}>
          <Topbar handleSolve={this.handleSolve} />
          <Loadbar />
        </div>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          style={{ height: "90vh" }}
        >
          <Grid item>
            <Board
              handleInput={this.handleInput}
              boardarry={boardarry}
              change={change}
            />
          </Grid>
          <Grid>
            <Output words={words} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
