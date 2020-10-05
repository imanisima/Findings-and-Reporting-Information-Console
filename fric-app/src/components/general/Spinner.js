/**
 * 
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: "center",
		verticalAlign: "middle",
		positionY: "fixed",
		top: "50%",
		transform: "translate(0, 700%)",
	},
	
}));

export default function Spinner() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CircularProgress />
		</div>
	);
}