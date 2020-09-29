/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutSkeleton from '../components/general/LayoutSkeleton';
import SetupModal from '../components/setup/SetupModal';
import { darkTheme } from '../components/general/ThemeColors';

export default function SetupPage() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutSkeleton
				mainContentComponent={<SetupModal />}
			/>
		</ThemeProvider>
	);
}
