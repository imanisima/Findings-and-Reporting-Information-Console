
/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme } from '../components/general/ThemeColors';
import LayoutTemplate from '../components/general/LayoutTemplate';
import ConfigurationOverview from '../components/configuration/ConfigurationOverview';
import ConfigurationDetailView from '../components/configuration/ConfigurationDetailView';

export default function ConfigurationPage() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={<ConfigurationOverview />}
				detailComponent={<ConfigurationDetailView />}
			/>
		</ThemeProvider>
	);
}
