/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import { darkTheme } from '../components/general/ThemeColors';
import ProgressView from '../components/progress/ProgressView'

export default function ProgressPage() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={<ProgressView/>}
			/>
		</ThemeProvider>
	);
}