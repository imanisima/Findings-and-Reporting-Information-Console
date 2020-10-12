/**
 * 
 */

import React, { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import { ThemeProvider } from '@material-ui/core/styles';
import Spinner from '../components/general/Spinner';
import LayoutTemplate from '../components/general/LayoutTemplate';
import { darkTheme } from '../components/general/ThemeColors';
import TasksOverviewTable from '../components/tasks/TasksOverviewTable';
import TaskDetailView from '../components/tasks/TaskDetailView';
import TasksDetail from '../components/tasks/FRIC_gui_tasks_details';

import {Progress, Priority, Progression } from '../components/general/EnumeratedTypes';

const data = [
	{_id: '43', name: 'Task 1', system: 'Sys', analysts: 'anal1', priority: 'High', progress: 'Not Started', subtasks: 12, findings: 0, dueDate: new Date()}
]
const options = {
	progress: Object.values(Progression),
	priority: Object.values(Priority),
	analysts: ['anal1'],
	tasks: ['task1', 'task2', 'task4'],
}

export default function TasksPage() {
	const [tableData, setTableData] = useState([]);
	const [formOptions, setFormOptions] = useState(null);
	const [selectedTask, setSelectedTask] = useState(null);
	const [contentIsLoading, setContentIsLoading] = useState(true);

	const headings = [
		{ id: '_id', numeric: true, disablePadding: true, label: '_id' },
		{ id: 'name', numeric: false, disablePadding: false, label: 'Name' },
		{ id: 'system', numeric: false, disablePadding: false, label: 'System' },
		{ id: 'analysts', numeric: false, disablePadding: true, label: 'Analysts' },
		{ id: 'priority', numeric: false, disablePadding: false, label: 'Priority' },
		{ id: 'progress', numeric: false, disablePadding: false, label: 'Progress' },
		{ id: 'subtasks', numeric: true, disablePadding: false, label: 'No. of Subtasks' },
		{ id: 'findings', numeric: true, disablePadding: false, label: 'No. of Findings' },
		{ id: 'dueDate', numeric: true, disablePadding: false, label: 'Due Date' },
	];

	useLayoutEffect(() => {
		setContentIsLoading(false);

		// TODO: fetch table data
		axios.get('http://localhost:5000/tasks')
			.then(res => {
				console.log(res.data);
				// setTableData(res.data);
				setContentIsLoading(false);
			})
			.catch(err => console.log(err));

		//TODO: fetch detail form options
		axios.get('http://localhost:5000/options?analysts&priority&progress&tasks')
			.then(res => {
				console.log(res.data);
				setFormOptions(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={
					(contentIsLoading) ? <Spinner /> : (
						<TasksOverviewTable rows={data} headings={headings} setSelectedTask={setSelectedTask} />
					)
				}
				detailComponent={<TaskDetailView selectedTask={data[0]} options={options} />}
			/>
		</ThemeProvider>
	);
}