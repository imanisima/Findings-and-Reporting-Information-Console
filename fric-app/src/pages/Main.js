/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutSkeleton from '../components/general/LayoutSkeleton';
import OverviewCards from '../components/summary/OverviewCards';
import { darkTheme } from '../components/general/ThemeColors';

export default function Main() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutSkeleton
				mainContentComponent={<OverviewCards />}
			/>
		</ThemeProvider>
	);
}