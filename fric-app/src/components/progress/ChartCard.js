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

const completeSystem = 4;
const completeTask = 12;
const completeSubtask = 35;

const incompleteSystem = 2;
const incompleteTask = 3;
const incompleteSubtask = 4;



export default function ChartCard(props) {
	const classes = useStyles();

	var chartData = {
		labels: ['Incomplete Systems' ,'Incomplete Task' ,'Incomplete Subtask' , 'Systems', 'Tasks', 'Subtasks' ],
		datasets: [
			{
				data: [incompleteSystem,incompleteTask,incompleteSubtask,completeSystem, completeTask, completeSubtask],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(63, 191, 63, 0.2)',
					'rgba(63, 191, 63, 0.2)',
					'rgba(63, 191, 63, 0.2)'
				],
				borderColor: [
					'rgba(249, 58, 100)',
					'rgba(249, 58, 100)',
					'rgba(249, 58, 100)',
					'rgba(63, 191, 63, 0.7)',
					'rgba(63, 191, 63, 0.7)',
					'rgba(63, 191, 63, 0.7)'
				],
				hoverBackgroundColor: [
					'rgba(249, 58, 100, 0.7)',
					'rgba(249, 58, 100, 0.7)',
					'rgba(249, 58, 100, 0.7)',
					'rgba(63, 191, 63, 1)',
					'rgba(63, 191, 63, 1)',
					'rgba(63, 191, 63, 1)'
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
			text: 'Completed',
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