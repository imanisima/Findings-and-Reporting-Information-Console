/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import OverviewCards from '../components/summary/OverviewCards';
import { darkTheme } from '../components/general/ThemeColors';

export default function SummaryPage() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={<OverviewCards />}
			/>
		</ThemeProvider>
	);
}
