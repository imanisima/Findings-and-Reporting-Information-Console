/**
 * 
 */

import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import SystemsDetail from '../components/systems/FRIC_gui_system_details';
import SystemOverviewTable from '../components/systems/SystemOverviewTable'
import { darkTheme } from '../components/general/ThemeColors';
import axios from 'axios';
import PropTypes from 'prop-types';

import { options } from '../components/general/test/eventstestdata'; //TODO: remove test data import when connected to backend
import { getSystems } from '../services/services';

export default function SystemsPage(props) {
	const [selectedEvent, setSelectedEvent] = useState(null);

	const headings = [
		{ id: 'name', numeric: false, disablePadding: false, label: 'System' },
		{ id: 'numTasks', numeric: true, disablePadding: false, label: 'No. of Tasks' },
		{ id: 'numFindings', numeric: true, disablePadding: false, label: 'No. of Findings' },
		{ id: 'progress', numeric: false, disablePadding: false, label: 'Progress' },
	];

	const data = [
		{ name: 'System1', numTasks: 2, numFindings: 3, progress: 'Not Applicable', },
	]

	const test = getSystems();
	console.log(test)

	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={<SystemOverviewTable rows={data} headings={headings} setDetailData={setSelectedEvent} />}
				detailComponent={<SystemsDetail />}
			/>
		</ThemeProvider>
	);
}
SystemsPage.propTypes = {
	data: PropTypes.array
}