import { ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react';
import LayoutTemplate from '../components/general/LayoutTemplate';
import { darkTheme } from '../components/general/ThemeColors';
import Spinner from '../components/general/Spinner';
import FindingsOverviewTable from '../components/findings/FindingOverviewTable'
import FindingDetailView from '../components/findings/FindingDetailView'
import NewFindingDialog from '../components/findings/NewFindingDialog'
import ConfirmArchiveDialog from '../components/general/ConfirmArchiveDialog';
import { ToolbarNewActionContext } from '../components/general/ToolbarNewActionContext';

export default function FindingsPage() {
	const [tableData, setTableData] = useState([]);
	const [selected, setSelected] = useState([]);
	const [contentIsLoading, setContentIsLoading] = useState(true);
	const [newDialogOpen, setNewDialogOpen] = useState(false);
	const [archiveDialogOpen, setArchiveDialogOpen] = useState(false);
	const [systemArray, setSystemArray] = useState([]);
	const [taskArray, setTaskArray] = useState([]);
	const [subtaskArray, setSubtaskArray] = useState([]);

	const headings = [
		{ id: 'id', numeric: false, disablePadding: true, label: '_id' },
		{ id: 'title', numeric: false, disablePadding: false, label: 'Title' },
		{ id: 'system', numeric: false, disablePadding: false, label: 'System' },
		{ id: 'task', numeric: false, disablePadding: true, label: 'Task' },
		{ id: 'subtask', numeric: false, disablePadding: true, label: 'Subtask' },
		{ id: 'analyst', numeric: false, disablePadding: false, label: 'Analyst' },
		{ id: 'status', numeric: false, disablePadding: true, label: 'Status' },
		{ id: 'classification', numeric: false, disablePadding: true, label: 'Classification' },
		{ id: 'type', numeric: true, disablePadding: false, label: 'Type' },
		{ id: 'risk', numeric: false, disablePadding: true, label: 'Risk' },
		{ id: 'data', numeric: false, disablePadding: true, label: 'Date'}
	];

	const reload = () => {

		async function getData() {
			setContentIsLoading(true);

			const tableData = axios.get('http://localhost:5000/findings/table')
			const requestSystem = axios.get('http://localhost:5000/systems/names');
			const requestTask = axios.get('http://localhost:5000/tasks/names');
			const requestSubtask = axios.get('http://localhost:5000/subtasks/names');

			axios
				.all([tableData, requestSystem, requestTask, requestSubtask])
				.then(
					axios.spread((...responses) => {
						const responseTable = responses[0].data;
						const responseSystem = responses[1].data;
						const responseTask = responses[2].data;
						const responseSubtask = responses[3].data;
						setTableData(responseTable)
						setSystemArray(responseSystem);
						setTaskArray(responseTask);
						setSubtaskArray(responseSubtask);
					})
				)
				.catch(err => {
					console.log(err)
				})
				.finally(
					setContentIsLoading(false)
				)
		}
		getData()


	};

	const confirmArchive = () => { // Send update request to set archived field to true
		axios.put('http://localhost:5000/findings/archive', {
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
							<FindingsOverviewTable rows={tableData} headings={headings} setSelectedFindings={setSelected} archiveAction={() => setArchiveDialogOpen(true)} />
						</ToolbarNewActionContext.Provider>
					)
				}
				detailComponent={
				<FindingDetailView 
					selectedFinding={selected} 
					reload={reload} 
					systemArray={systemArray}
					taskArray={taskArray}
					subtaskArray={subtaskArray}/>
				}
			/>
			<NewFindingDialog 
				isOpen={newDialogOpen} 
				closeDialogAction={() => setNewDialogOpen(false)} 
				reload={reload} 
				systemArray={systemArray}
				taskArray={taskArray}
				subtaskArray={subtaskArray}
			/>
			<ConfirmArchiveDialog
				isOpen={archiveDialogOpen}
				numSelected={selected.length}
				confirmAction={confirmArchive}
				closeDialogAction={() => setArchiveDialogOpen(false)}
				objectType="Finding"
			/>
		</ThemeProvider>
	);
}