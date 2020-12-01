/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import ArchiveOverview from '../components/archive/FRIC_gui_archive_overview.js';
import { darkTheme } from '../components/general/ThemeColors';

export default function ArchivePage() {
	
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={<ArchiveOverview />}
			/>
		</ThemeProvider>
	);
}