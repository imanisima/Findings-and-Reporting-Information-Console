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
	const [tableArray, setTableArray] = useState([])

	const headings = [
		{ id: 'name', numeric: false, disablePadding: false, label: 'System' },
		{ id: 'numTasks', numeric: true, disablePadding: false, label: 'No. of Tasks' },
		{ id: 'numFindings', numeric: true, disablePadding: false, label: 'No. of Findings' },
		{ id: 'progress', numeric: false, disablePadding: false, label: 'Progress' },
	];
	
	function mapSystemsToTable(response) {
		const tableArray = response.map((system, i) => {
			return { 
				name: system.name,
				numTasks: Math.floor(Math.random() * Math.floor(10)),
				numFindings:  Math.floor(Math.random() * Math.floor(10)),
				progress: 'In Progress'
			}
		})
		setTableArray(tableArray)
	}
	const reload = () => {

		async function getData() {
			setContentIsLoading(true);

			try {
				const fetch = await axios.get('http://localhost:5000/systems/', {
					params: {
						archived: false
					}
				})
				const response = await fetch.data
				setTableData(response)
				mapSystemsToTable(response)	
			}
			catch (error) {
				console.log(error)
			} finally {
				setContentIsLoading(false)
			}
		}
		getData()


	};


	useLayoutEffect(() => reload(), []);

	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={
					(contentIsLoading) ? <Spinner /> : (
						<ToolbarNewActionContext.Provider value={() => setNewDialogOpen(true)}>
							<SystemOverviewTable rows={tableArray} headings={headings} setSelectedSystem={setSelected} archiveAction={() => setArchiveDialogOpen(true)} />
						</ToolbarNewActionContext.Provider>
					)
				}
				detailComponent={
				<SystemDetailView 
					selectedSystem = {selected}
					reload={reload} 

					/>
				}
			/>
			<NewSystemDialog 
				isOpen={newDialogOpen} 
				closeDialogAction={() => setNewDialogOpen(false)} 
				reload={reload} 

				
			/>
			<ConfirmArchiveDialog
				isOpen={archiveDialogOpen}
				numSelected={selected.length}
				//confirmAction={confirmArchive}
				closeDialogAction={() => setArchiveDialogOpen(false)}
				objectType="System"
			/>
		</ThemeProvider>
	);
}
