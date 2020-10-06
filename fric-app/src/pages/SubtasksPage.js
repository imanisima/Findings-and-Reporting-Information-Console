/**
 * 
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import SubtasksOverviewTable from '../components/subtasks/SubtasksOverviewTable'
import SubtaskDetailView from '../components/subtasks/SubtaskDetailView';
import { darkTheme } from '../components/general/ThemeColors';
import { data, headings, options } from '../components/general/test/subtaskstestdata'; //TODO: remove test data import when connected to backend requests


export default function SubtasksPage() {
	const [selectedSubtask, setSelectedSubtask] = useState(null);

	useEffect(() => { // Similar to componentDidMount
		console.log('Component did mount');
		//TODO: fetch subtasks for table data
		axios.get('http://localhost:5000/subtasks')
			.then(res => {
				console.log(res);
			})
			.catch(err => console.log(err));

		//TODO: fetch dropdown options for detail view
		console.log('Component did mount');
		axios.get('http://localhost:5000/options?analysts&tasks&subtasks')
			.then(res => {
				console.log(res);
			})
			.catch(err => console.log(err));
	});

	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={<SubtasksOverviewTable rows={data} headings={headings} setSelectedSubtask={setSelectedSubtask} />}
				detailComponent={<SubtaskDetailView selectedSubtask={selectedSubtask} options={options} />}
			/>
		</ThemeProvider>
	);
}
