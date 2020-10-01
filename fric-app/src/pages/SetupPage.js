/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import SetupModal from '../components/setup/SetupModal';
import { darkTheme } from '../components/general/ThemeColors';

export default function SetupPage() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={<SetupModal />}
			/>
		</ThemeProvider>
	);
}
