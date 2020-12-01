/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutSkeleton from '../components/general/LayoutSkeleton';
import ConfigurationOverview from '../components/configuration/FRIC_gui_configuration_overview'
import { darkTheme } from '../components/general/ThemeColors';

export default function ConfigurationPage() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
            <LayoutSkeleton
				mainContentComponent={<ConfigurationOverview />}
			/>
		</ThemeProvider>
	);
}
