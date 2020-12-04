/**
 * 
 */

import React, {  useLayoutEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import SystemOverviewTable from '../components/systems/SystemOverviewTable'
import { darkTheme } from '../components/general/ThemeColors';
import axios from 'axios';
import SystemDetailView from '../components/systems/SystemsDetailView'
import NewSystemDialog from '../components/systems/NewSystemDialog'
import ConfirmArchiveDialog from '../components/general/ConfirmArchiveDialog';
import { ToolbarNewActionContext } from '../components/general/ToolbarNewActionContext';
import Spinner from '../components/general/Spinner';

export default function SystemsPage() {
	const [tableData, setTableData] = useState([]);
	const [newDialogOpen, setNewDialogOpen] = useState(false);
	const [contentIsLoading, setContentIsLoading] = useState(true);
	const [archiveDialogOpen, setArchiveDialogOpen] = useState(false);
	const [selected, setSelected] = useState([]);
	const [findingArray, setFindingArray] = useState([]);

	const headings = [
		{ id: 'name', numeric: false, disablePadding: false, label: 'System' },
		{ id: 'numTasks', numeric: true, disablePadding: false, label: 'No. of Tasks' },
		{ id: 'numFindings', numeric: true, disablePadding: false, label: 'No. of Findings' },
		{ id: 'progress', numeric: false, disablePadding: false, label: 'Progress' },
	];
	const reload = () => {

		async function getData() {
			setContentIsLoading(true);

			const tableData = axios.get('http://localhost:5000/systems/table')
			const requestFinding = axios.get('http://localhost:5000/findings/table')


			axios
				.all([tableData, requestFinding])
				.then(
					axios.spread((...responses) => {
						const responseTable = responses[0].data;
						const responseFinding = responses[1].data;

						setTableData(responseTable)
						setFindingArray(responseFinding);
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

	/*const confirmArchive = () => { // Send update request to set archived field to true
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
	};*/

	useLayoutEffect(() => reload(), []);

	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={
					(contentIsLoading) ? <Spinner /> : (
						<ToolbarNewActionContext.Provider value={() => setNewDialogOpen(true)}>
							<SystemOverviewTable rows={tableData} headings={headings} setSelectedFindings={setSelected} archiveAction={() => setArchiveDialogOpen(true)} />
						</ToolbarNewActionContext.Provider>
					)
				}
				detailComponent={
				<SystemDetailView 
					selectedSystem = {selected}
					reload={reload} 
					findingArray={findingArray}
					/>
				}
			/>
			<NewSystemDialog 
				isOpen={newDialogOpen} 
				closeDialogAction={() => setNewDialogOpen(false)} 
				reload={reload} 
				findingArray={findingArray}
				
			/>
			<ConfirmArchiveDialog
				isOpen={archiveDialogOpen}
				numSelected={selected.length}
				//confirmAction={confirmArchive}
				closeDialogAction={() => setArchiveDialogOpen(false)}
				objectType="System"
			/>
			<ConfirmArchiveDialog
				isOpen={archiveDialogOpen}
				numSelected={selected.length}
				confirmAction={confirmArchive}
				closeDialogAction={() => setArchiveDialogOpen(false)}
				objectType="System"
			/>		
		</ThemeProvider>
	);
}
