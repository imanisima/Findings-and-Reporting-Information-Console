import React from 'react';
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import EventTreeCustom from '../event-tree/EventTreeCustom';

const useStyles = makeStyles({
	root: {
		minWidth: 150,
		margin: '0.8em',
		display: 'inline-block',
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 17,
		display: 'inline-block',
	},
	pos: {
		marginBottom: 12,
	},
	iconWrap: {
		display: 'inline-block',
		verticalAlign: 'middle',
		paddingRight: '0.3em',
	},
	content: {
		marginBottom: '1em',
		marginRight: '1em',
	},
});

export default function EventTreeCard(props) {
	const classes = useStyles();
	const animation = useSpring({
		from: {
			transform: "scale(0)"
		},
		to: {
			transform: `scale(1)`
		},
		width: '200px',
	});

	return (
		<Card className={classes.root}>
			<CardContent className={classes.content} style={animation}>
				<div style={{ textAlign: 'center' }}>
					<div className={classes.iconWrap}><AccountTreeIcon color="secondary" /></div>
					<Typography className={classes.title} color="textSecondary" gutterBottom>
						Event Tree
					</Typography>
				</div>
				<animated.div style={animation}>
					<EventTreeCustom />
				</animated.div>
			</CardContent>
		</Card>
	);
}
