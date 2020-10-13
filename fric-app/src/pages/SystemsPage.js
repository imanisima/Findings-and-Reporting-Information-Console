/**
 * 
 */

import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import SystemsDetailView from '../components/systems/SystemsDetailView';
import SystemOverviewTable from '../components/systems/SystemOverviewTable'
import { darkTheme } from '../components/general/ThemeColors';
import axios from 'axios';
import PropTypes from 'prop-types';

import { options } from '../components/general/test/eventstestdata'; //TODO: remove test data import when connected to backend
import Spinner from '../components/general/Spinner';

export default function SystemsPage(props) {
	const [ isLoading, setIsLoading ] = useState(false)
	const [ data, setData ] = useState([])
	const [tableArray, setTableArray] = useState([])
	const [selected, setSelected] = useState(null)

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

	useEffect(() => {
		async function getSystems() {
			setIsLoading(true)
			try {
				const fetch = await axios.get('http://localhost:5000/systems/')
				const response = await fetch.data
				setData(response)
				mapSystemsToTable(response)	
			}
			catch (error) {
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}
		getSystems()
	}, [])

	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={
					(isLoading) ? <Spinner /> : (
						(data != null) ? <SystemOverviewTable rows={tableArray} headings={headings} setSelectedSystem={setSelected} /> : <></>
					)
				}
				detailComponent={<SystemsDetailView selectedSystem = {selected}/>}
			/>
		</ThemeProvider>
	);
}
SystemsPage.propTypes = {
	data: PropTypes.array
}