/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import SystemsOverview from '../components/systems/FRIC_gui_system_overview';
import SystemsDetail from '../components/systems/FRIC_gui_system_details';
import { darkTheme } from '../components/general/ThemeColors';

export default function TasksPage() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={<SystemsOverview />}
				detailComponent={<SystemsDetail />}
			/>
		</ThemeProvider>
	);
}