import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, GridList, GridListTile } from "@material-ui/core";
import Tile from "./Tile";

const styles = theme => ({
	root: {
		height: 340,
		width: 340,
		display: "flex",
		// backgroundColor: 'transparent',
		// boxShadow: 'none',
	}
});

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	

	render() {
		const { classes } = this.props;
		const { boardarry } = this.props;
		const value = 5;
		return (
				<GridList cellHeight={80} component={Paper} elevation={5} className={classes.root} cols={4}>
					{boardarry.map((value, i) => 
						<GridListTile key={i} cols={1}>
							<Tile value={value}/>
						</GridListTile>
					)}
				</GridList>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Board);
