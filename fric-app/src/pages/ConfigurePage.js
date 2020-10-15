/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import ConfigurationOverview from '../components/configuration/FRIC_gui_configuration_overview'
import { darkTheme } from '../components/general/ThemeColors';

export default function ConfigurationPage() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={<ConfigurationOverview />}
			/>
		</ThemeProvider>
	);
}
