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
import NewTaskDialog from '../components/tasks/NewTaskDialog';
import ArchiveTaskDialog from '../components/tasks/ArchiveTaskDialog';
import { ToolbarNewActionContext } from '../components/general/ToolbarNewActionContext';

export default function TasksPage() {
	const [tableData, setTableData] = useState([]);
	const [selected, setSelected] = useState([]);
	const [contentIsLoading, setContentIsLoading] = useState(true);
	const [newDialogOpen, setNewDialogOpen] = useState(false);
	const [archiveDialogOpen, setArchiveDialogOpen] = useState(false);

	const headings = [
		{ id: 'id', numeric: false, disablePadding: true, label: '_id' },
		{ id: 'name', numeric: false, disablePadding: false, label: 'Name' },
		{ id: 'system', numeric: false, disablePadding: false, label: 'System' },
		{ id: 'analysts', numeric: false, disablePadding: true, label: 'Analysts' },
		{ id: 'priority', numeric: false, disablePadding: false, label: 'Priority' },
		{ id: 'progress', numeric: false, disablePadding: false, label: 'Progress' },
		{ id: 'subtasks', numeric: true, disablePadding: false, label: 'No. of Subtasks' },
		{ id: 'findings', numeric: true, disablePadding: false, label: 'No. of Findings' },
		{ id: 'dueDate', numeric: true, disablePadding: false, label: 'Due Date' },
	];

	const reload = () => {
		setContentIsLoading(true);
		axios.get('http://localhost:5000/tasks/table') // Fetch table data
			.then(res => {
				setTableData(res.data);
				setContentIsLoading(false);
			})
			.catch(err => {
				console.log(err);
				//TODO: display error message
				setContentIsLoading(false);
			});
	};

	useLayoutEffect(() => reload(), []);

	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={
					(contentIsLoading) ? <Spinner /> : (
						<ToolbarNewActionContext.Provider value={() => setNewDialogOpen(true)}>
							<TasksOverviewTable rows={tableData} headings={headings} setSelectedTasks={setSelected} archiveAction={() => setArchiveDialogOpen(true)} />
						</ToolbarNewActionContext.Provider>
					)
				}
				detailComponent={<TaskDetailView selectedTask={selected} reload={reload} />}
			/>
			<NewTaskDialog isOpen={newDialogOpen} closeDialogAction={() => setNewDialogOpen(false)} reload={reload} />
			<ArchiveTaskDialog tasks={selected} isOpen={archiveDialogOpen} closeDialogAction={() => setArchiveDialogOpen(false)} reload={reload} />
		</ThemeProvider>
	);
}
