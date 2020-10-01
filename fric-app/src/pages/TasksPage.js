/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import TasksDetail from '../components/tasks/FRIC_gui_tasks_details';
import { darkTheme } from '../components/general/ThemeColors';

export default function TasksPage() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={<></>}
				detailComponent={<TasksDetail />}
			/>
		</ThemeProvider>
	);
}