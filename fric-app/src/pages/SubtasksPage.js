/**
 * 
 */

import { ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react';
import LayoutTemplate from '../components/general/LayoutTemplate';
import { options } from '../components/general/test/subtaskstestdata'; //TODO: remove test data import when connected to backend requests
import { darkTheme } from '../components/general/ThemeColors';
import Spinner from '../components/general/Spinner';
import NewSubtaskDialog from '../components/subtasks/NewSubtaskDialog';
import SubtaskDetailView from '../components/subtasks/SubtaskDetailView';
import SubtasksOverviewTable from '../components/subtasks/SubtasksOverviewTable';
import ConfirmArchiveDialog from '../components/general/ConfirmArchiveDialog';
import { ToolbarNewActionContext } from '../components/general/ToolbarNewActionContext';

export default function SubtasksPage() {
	const [tableData, setTableData] = useState([]);
	const [selected, setSelected] = useState([]);
	const [contentIsLoading, setContentIsLoading] = useState(true);
	const [newDialogOpen, setNewDialogOpen] = useState(false);
	const [archiveDialogOpen, setArchiveDialogOpen] = useState(false);

	const headings = [
		{ id: 'id', numeric: true, disablePadding: true, label: '_id' },
		{ id: 'title', numeric: false, disablePadding: false, label: 'Title' },
		{ id: 'task', numeric: false, disablePadding: false, label: 'Task' },
		{ id: 'analyst', numeric: false, disablePadding: true, label: 'Analyst' },
		{ id: 'progress', numeric: false, disablePadding: false, label: 'Progress' },
		{ id: 'findings', numeric: false, disablePadding: false, label: 'Findings' },
		{ id: 'dueDate', numeric: false, disablePadding: true, label: 'Due Date' },
	];

	const reload = () => {
		setContentIsLoading(true);
		axios.get('http://localhost:5000/subtasks/table') // Fetch table data
			.then(res => {
				console.log(res);
				setContentIsLoading(false);
			})
			.catch(err => {
				console.log(err);
				//TODO: display error message
				setContentIsLoading(false);
			});
	};

	const confirmArchive = () => { // Send update request to set archived field to true
		axios.put('http://localhost:5000/subtasks/archive', {
			params: {
				id: selected
			}
		})
			.then(res => {
				console.log(res);
				reload();
				setArchiveDialogOpen(false);
			})
			.catch(err => {
				//TODO: display error message
				console.log(err);
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
							<SubtasksOverviewTable rows={tableData} headings={headings} setSelectedTasks={setSelected} archiveAction={() => setArchiveDialogOpen(true)} />
						</ToolbarNewActionContext.Provider>
					)
				}
				detailComponent={<SubtaskDetailView selectedSubtask={selected} options={options} />}
			/>
			<NewSubtaskDialog isOpen={newDialogOpen} closeDialogAction={() => setNewDialogOpen(false)} reload={reload} />
			<ConfirmArchiveDialog
				isOpen={archiveDialogOpen}
				numSelected={selected.length}
				confirmAction={confirmArchive}
				closeDialogAction={() => setArchiveDialogOpen(false)}
				objectType="Subtask"
			/>
		</ThemeProvider>
	);
}
