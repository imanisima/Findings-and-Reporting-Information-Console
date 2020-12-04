/**
 * 
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Doughnut } from 'react-chartjs-2';


const useStyles = makeStyles({
	root: {
		maxWidth: '50em',
	},
	content: {
		margin: 0,
	},
});

export default function ChartCard(props) {
	const classes = useStyles();

	var chartData = {
		labels: ['Events', 'Systems', 'Tasks', 'Subtasks', 'Findings', 'Reports'],
		datasets: [
			{
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					'rgba(249, 58, 100, 0.3)',
					'rgba(39, 164, 251, 0.3)',
					'rgba(255, 192, 32, 0.3)',
					'rgba(75, 192, 192, 0.3)',
					'rgba(172, 102, 245, 0.3)',
					'rgba(255, 159, 64, 0.3)'
				],
				borderColor: [
					'rgba(249, 58, 100)',
					'rgba(39, 164, 251)',
					'rgba(255, 192, 32)',
					'rgba(75, 192, 192)',
					'rgba(172, 102, 245)',
					'rgba(255, 159, 64)'
				],
				hoverBackgroundColor: [
					'rgba(249, 58, 100, 0.7)',
					'rgba(39, 164, 251, 0.7)',
					'rgba(255, 192, 32, 0.7)',
					'rgba(75, 192, 192, 0.7)',
					'rgba(172, 102, 245, 0.7)',
					'rgba(255, 159, 64, 0.7)'
				],
				hoverBorderColor: [
					'rgba(249, 58, 100, 0.7)',
					'rgba(39,164,251, 0.7)',
					'rgba(255, 192, 32, 0.7)',
					'rgba(75, 192, 192, 0.7)',
					'rgba(172, 102, 245, 0.7)',
					'rgba(255, 159, 64, 0.7)'
				],
				borderWidth: 1,
			}
		],
	}

	const chartOps = {
		legend: {
			labels: {
				fontColor: 'lightgrey',
				boxWidth: 15,
				padding: 20,
			},
			position: 'bottom',
		},
		title: {
			display: true,
			text: 'F.R.I.C. Overview',
			fontColor: 'white',
		},
		layout: { padding: 0 },
	}

	return (
		<Card className={classes.root}>
			<CardContent className={classes.content}>
				<Doughnut id="donut" data={chartData} options={chartOps} />
			</CardContent>
		</Card>
	);
}
