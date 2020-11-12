
/**
 * 
 */

import { ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react';
import LayoutTemplate from '../components/general/LayoutTemplate';
import { darkTheme } from '../components/general/ThemeColors';
import Spinner from '../components/general/Spinner';
import NewSubtaskDialog from '../components/subtasks/NewSubtaskDialog';
import SubtaskDetailView from '../components/subtasks/SubtaskDetailView';
import SubtasksOverviewTable from '../components/subtasks/SubtasksOverviewTable';
import ConfirmArchiveDialog from '../components/general/ConfirmArchiveDialog';
import { ToolbarNewActionContext } from '../components/general/CustomTableToolbar';

export default function SubtasksPage() {
	const [tableData, setTableData] = useState([]);
	const [selected, setSelected] = useState([]);
	const [contentIsLoading, setContentIsLoading] = useState(true);
	const [newDialogOpen, setNewDialogOpen] = useState(false);
	const [archiveDialogOpen, setArchiveDialogOpen] = useState(false);

	const headings = [
		{ id: 'name', numeric: false, disablePadding: false, label: 'Name' },
		{ id: 'ownerTask', numeric: false, disablePadding: false, label: 'Owner Task' },
		{ id: 'analysts', numeric: false, disablePadding: true, label: 'Analysts' },
		{ id: 'progress', numeric: false, disablePadding: true, label: 'Progress' },
		{ id: 'findings', numeric: true, disablePadding: false, label: 'No. of Findings' },
		{ id: 'dueDate', numeric: false, disablePadding: true, label: 'Due Date' },
		{ id: 'id', numeric: false, disablePadding: true, label: '_id' },
	];

	const reload = () => {
		setContentIsLoading(true);
		axios.get('http://localhost:5000/subtasks/table') // Fetch table data
			.then(res => {
				console.log(res);
				setTableData(res.data);
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

	const promoteSubtasks = () => {}; //TODO: implement promote subtask functionality

	useLayoutEffect(() => reload(), []);

	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={
					(contentIsLoading) ? <Spinner /> : (
						<ToolbarNewActionContext.Provider value={() => setNewDialogOpen(true)}>
							<SubtasksOverviewTable rows={tableData} headings={headings} setSelectedSubtasks={setSelected} archiveAction={() => setArchiveDialogOpen(true)} promoteAction={promoteSubtasks} />
						</ToolbarNewActionContext.Provider>
					)
				}
				detailComponent={<SubtaskDetailView selectedSubtask={selected} reload={reload} />}
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