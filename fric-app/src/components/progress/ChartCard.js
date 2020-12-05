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

const completeSystem = localStorage.getItem("CompleteSy");
console.log('Complete Sytask Chart', completeSystem)

const completeTask = localStorage.getItem("CompleteT");
console.log('Complete task Chart', completeTask)

const completeSubtask = Math.abs(localStorage.getItem("CompleteS"));
console.log('Complete Subtask Chart', completeSubtask)

const incompleteSystem = Math.abs(localStorage.getItem("IncompleteSy"));
console.log('Incomplete System Chart', incompleteSystem)

const incompleteTask = localStorage.getItem("IncompleteT");
console.log('incomplete task Chart', incompleteTask)

const incompleteSubtask = localStorage.getItem("IncompleteS");
console.log('Incomplete subtask Chart', incompleteSubtask)



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