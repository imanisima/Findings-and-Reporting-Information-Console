/*
 *
 */

import React from 'react'
import SubtaskDetailView from './SubtaskDetailView'
import styles from '../css/SubtasksContentView.module.css'
import SubtasksOverviewTable from './SubtasksOverviewTable'


/* TODO: Testing data, delete when file is connected to production system */
// Available options for detail view
let analysts = ['MS', 'NO', 'SD', 'WE', 'VD', 'WO']
let collabs = ['MS', 'NO', 'SD', 'WE', 'VD', 'WO']
let tasks = ['task1', 'task2', 'task3', 'task4']
let subtasks = ['subtask1', 'subtask2', 'subtask3', 'subtask4', 'subtask5']
let progOptions = [33,55,66,35,78,74,21]
let taskObject = {
	title: 'Task Test Object',
	description: 'Voluptate anim non amet cupidatat ut pariatur amet deserunt do irure incididunt nostrud.',
	progress: 99,
	task: 'Aliquip sit duis veniam qui.',
	subtask: 'Nulla nisi consectetur ipsum ex proident.',
	dueDate: new Date(),
}

// Data passed into overview table
let data = [ 
	{ id: 4243, title: 'title1', task: 'task5', analyst: 'DC', progress: 34, findings: 'Occaecat nostrud fugiat ex ad elit deserunt mollit adipisicing occaecat esse dolore occaecat.', dueDate: new Date() },
	{ id: 77445, title: 'title2', task: 'task4', analyst: 'MJ', progress: 21, findings: 'Est cupidatat voluptate cupidatat id sit commodo mollit exercitation pariatur tempor eiusmod.', dueDate: new Date() },
	{ id: 344, title: 'title3', task: 'task3', analyst: 'II', progress: 66, findings: 'Fugiat veniam deserunt cillum labore consectetur tempor elit esse nisi.', dueDate: new Date() },
	{ id: 2, title: 'title4', task: 'task2', analyst: '', progress: 78, findings: 'Pariatur dolore cupidatat voluptate cupidatat minim.', dueDate: new Date() },
	{ id: 977, title: 'title5', task: 'task1', analyst: 'MS', progress: 100, findings: 'Magna nulla adipisicing Lorem sint proident elit laborum.', dueDate: new Date() },
]
const headings = [
	{ id: 'id', numeric: true, disablePadding: true, label: '_id' },
	{ id: 'title', numeric: false, disablePadding: false, label: 'Title' },
	{ id: 'task', numeric: false, disablePadding: false, label: 'Task' },
	{ id: 'analyst', numeric: false, disablePadding: true, label: 'Analyst' },
	{ id: 'progress', numeric: false, disablePadding: false, label: 'Progress' },
	{ id: 'findings', numeric: false, disablePadding: false, label: 'Findings' },
	{ id: 'dueDate', numeric: false, disablePadding: true, label: 'Due Date' },
];
/* End Testing Data */

export default function SubtasksContentView() {
	return (
		<container className="sytles.subtaskContentView">
			<SubtasksOverviewTable rows={data} headings={headings}/>
		</container>
	)
}