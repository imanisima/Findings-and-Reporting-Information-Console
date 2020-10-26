/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import { darkTheme } from '../components/general/ThemeColors';
import ManualOverview from '../components/manual/ManualOverview';

import ManualDetails from '../components/manual/ManualDetails';

export default function ManualPage() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={<ManualOverview />}
				detailComponent={<ManualDetails />}
			/>
		</ThemeProvider>
	);
}
