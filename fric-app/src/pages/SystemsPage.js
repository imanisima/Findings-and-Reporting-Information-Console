/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutSkeleton from '../components/general/LayoutSkeleton';
import SystemsOverview from '../components/systems/FRIC_gui_system_overview';
import SystemsDetail from '../components/systems/FRIC_gui_system_details';
import { darkTheme } from '../components/general/ThemeColors';

export default function TasksPage() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutSkeleton
				mainContentComponent={<SystemsOverview />}
				detailComponent={<SystemsDetail />}
			/>
		</ThemeProvider>
	);
}