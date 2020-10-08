/**
 * 
 */

import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import SystemsDetail from '../components/systems/FRIC_gui_system_details';
import SystemOverviewTable from '../components/systems/SystemOverviewTable'
import { darkTheme } from '../components/general/ThemeColors';
import axios from 'axios';
import PropTypes from 'prop-types';

import { options } from '../components/general/test/eventstestdata'; //TODO: remove test data import when connected to backend
import Spinner from '../components/general/Spinner';

export default function SystemsPage(props) {
	const [selectedEvent, setSelectedEvent] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false)
    const [ data, setData ] = useState([])

	const headings = [
		{ id: 'name', numeric: false, disablePadding: false, label: 'System' },
		{ id: 'numTasks', numeric: true, disablePadding: false, label: 'No. of Tasks' },
		{ id: 'numFindings', numeric: true, disablePadding: false, label: 'No. of Findings' },
		{ id: 'progress', numeric: false, disablePadding: false, label: 'Progress' },
	];

	const data2 = [
		{ name: 'System1', numTasks: 2, numFindings: 3, progress: 'Not Applicable', },
	]

	useEffect(() => {
		async function getSystems() {
			setIsLoading(true)
			try {
				const fetch = await axios.get('http://localhost:5000/systems/')
				const response = await fetch.data
				setData(response)	
			}
			catch (error) {
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}
		getSystems()
	}, [])

	if( data.length > 0 ) {
		console.log(data[0].SystemName)
	}
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={
					(isLoading) ? <Spinner /> : (
						(data != null && data.length > 0) ? <SystemOverviewTable rows={data2} headings={headings} setDetailData={setSelectedEvent} /> : <></>
					)
				}
				detailComponent={<SystemsDetail />}
			/>
		</ThemeProvider>
	);
}
SystemsPage.propTypes = {
	data: PropTypes.array
}