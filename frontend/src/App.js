import React, { Component } from "react";
import Board from "./components/Board.js";
import Topbar from "./components/Topbar";
import Output from "./components/Output";
import CssBaseline from "@material-ui/core/CssBaseline";
import dict from "./assets/usa.txt"
import { Grid } from "@material-ui/core";

class App extends Component {
	constructor() {
		super();
		this.state = {
      boardarry: [],
      words: ["Jerold", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany", "Brittany"]
		};
	}

	componentDidMount() {
		this.setState({
			boardarry: [
				"b",
				"b",
				"c",
				"d",
				"e",
				"f",
				"g",
				"h",
				"i",
				"k",
				"l",
				"m",
				"n",
				"o",
				"p",
				"q"
	  ],
	   
		});
	}

	render() {

		const { boardarry, words, dict } = this.state;
		return (
			<div style={{ height: "100vh" }}>
				<CssBaseline />
				<Topbar dict={dict}/>
				<Grid
					container
					direction="row"
					justify="space-evenly"
					alignItems="center"
					style={{ height: "90vh" }}
				>
					<Grid item>
						<Board boardarry={boardarry} />
					</Grid>

					<Grid>
						<Output words={words}/>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default App;
