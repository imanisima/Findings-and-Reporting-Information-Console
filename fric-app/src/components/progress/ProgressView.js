/**
 * 
 */
import React from 'react';
import CheckedIcon from '@material-ui/icons/AssignmentTurnedIn';
import LowPriorityIcon from '@material-ui/icons/AssignmentReturned';
import DnsIcon from '@material-ui/icons/Dns';
import axios from "axios";


import OverviewCard from './OverviewCard';
import ChartCard from './ChartCard';

	var completeSystem = 4;
	var completeTask = 12;
	var completeSubtask = 35;
	var incompleteSystem = 2;
	var incompleteTask = 3;
	var incompleteSubtask = 4;


export default function SummaryView() {
	//var assert = require('assert')
	//var expect = require('chai').expect
	//var promise = new Promise(function (completeTask, incompleteTask))
	async function fetch() {
		await axios.get('http://localhost:5000/tasks', {
			params: {}
		})
			.then(res => {

				for (var i = 0; i < res.data.length; i++) {
					//console.log(res.data[i])
					if (res.data[i].progress === "Complete") {
						completeTask = completeTask + 1;
						//console.log('Complete task',completeTask)
					}
					else {
						incompleteTask = incompleteTask + 1
						//console.log('incomplete',incompleteTask)
					}
				}
				console.log('Complete task', completeTask)
			})
		/*
		await axios.get('http://localhost:5000/subtasks', {
			params: {}
		})
			.then(res => {

				for (var i = 0; i < res.data.length; i++) {
					//console.log(res.data[i])
					if (res.data[i].progress === "Complete") {
						completeTask = completeTask + 1;
						//console.log('Complete task',completeTask)
					}
					else {
						incompleteTask = incompleteTask + 1
						//console.log('incomplete',incompleteTask)
					}
				}
				console.log('Complete task', completeTask)
			})
			
		//console.log('Complete task', completeTask)
	};
	*/ //waiting for subtasks
	};
	fetch();
	console.log('Complete task', completeTask)
	return (
		<>
			<ChartCard />
			<div>
				<OverviewCard for="Complete Systems" amount= {completeSystem} icon={<DnsIcon color="action" />} />
				<OverviewCard for="Complete Tasks" amount={completeTask} icon={<CheckedIcon color="action" />} />
				<OverviewCard for="Complete Subtasks" amount={completeSubtask} icon={<LowPriorityIcon color="action" />} />
			</div>
			
			<div>
				<OverviewCard for="Incomplete Systems" amount={incompleteSystem} icon={<DnsIcon color="secondary" />} />
				<OverviewCard for="Incomplete Tasks" amount={incompleteTask} icon={<CheckedIcon color="secondary" />} />
				<OverviewCard for="Incomplete Subtasks" amount={incompleteSubtask} icon={<LowPriorityIcon color="secondary" />} />
			</div>
		</>
	);
}