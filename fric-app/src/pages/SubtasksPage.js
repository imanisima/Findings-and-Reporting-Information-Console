/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import SubtasksOverviewTable from '../components/subtasks/SubtasksOverviewTable'
import SubtasksDetailView from '../components/subtasks/SubtaskDetailView';
import { darkTheme } from '../components/general/ThemeColors';
import { data, headings, subtaskTestObject, options } from '../components/general/test/subtaskstestdata'; //TODO: remove test data import when connected to backend

export default function SubtasksPage() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={<SubtasksOverviewTable rows={data} headings={headings} />}
				detailComponent={<SubtasksDetailView selectedSubtask={subtaskTestObject} options={options} />}
			/>
		</ThemeProvider>
	);
}
