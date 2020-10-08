import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
		paddingRight: '0.1em',
	},
	data: {
		textAlign: 'center',
	},
});

export default function OverviewCard(props) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<div style={{textAlign: 'center'}}>
				<div className={classes.iconWrap}>{props.icon}</div>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					{props.for}
				</Typography>
				</div>
				<Typography variant="h5" component="h2" className={classes.data}>
					{props.amount}
				</Typography>
			</CardContent>
		</Card>
	);
}
