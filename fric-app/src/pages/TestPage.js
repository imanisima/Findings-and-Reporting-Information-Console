/**
 * 
 */

import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import LayoutSkeleton from '../components/general/LayoutSkeleton';
import SubtasksOverviewTable from '../components/subtasks/SubtasksOverviewTable'
import SubtasksDetailView from '../components/subtasks/SubtaskDetailView';
import { data, headings, subtaskTestObject, options } from '../components/general/test/subtaskstestdata'; //TODO: remove test data import when connected to backend

const darkTheme = createMuiTheme({
	palette: {
		type: 'dark',
	},
});

export default function TestPage() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutSkeleton
				mainContentComponent={ <SubtasksOverviewTable rows={data} headings={headings} openDetailAction={() => {}} /> }
				detailComponent={ <SubtasksDetailView selectedSubtask={subtaskTestObject} options={options} closeDetailAction={() => {}} /> }
			/>
		</ThemeProvider>
	);
}
