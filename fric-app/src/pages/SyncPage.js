/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutSkeleton from '../components/general/LayoutSkeleton';
import SyncOverview from '../components/sync/FRIC_gui_sync_overview';
import { darkTheme } from '../components/general/ThemeColors';

export default function Sync() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutSkeleton
				mainContentComponent={<SyncOverview />}
			/>
		</ThemeProvider>
	);
}
