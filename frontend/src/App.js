import React, { Component } from "react";
import Board from "./components/Board.js";
import Topbar from "./components/Topbar";
import Output from "./components/Output";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid } from "@material-ui/core";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      boardarry: [],
      tileboard: null,
      words: []
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
    axios
      .post("/api/solve", payload)
      .then(response => {
        console.log(response);
        this.setState({ words: response.data });
        console.log("done");
      })
      .catch(err => console.log("Error"));
  };

  handleInput = (data, index) => {
    console.log(data);
    console.log(index);
  };

  render() {
    const { boardarry, words } = this.state;
    return (
      <div style={{ height: "100vh" }}>
        <CssBaseline />
        <Topbar handleSolve={this.handleSolve} />
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          style={{ height: "90vh" }}
        >
          <Grid item>
            <Board handleInput={this.handleInput} boardarry={boardarry} />
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
