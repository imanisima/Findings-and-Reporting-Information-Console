/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import FindingsOverview from '../components/findings/FRIC_gui_findings_overview';
import FindingsDetails from '../components/findings/FRIC_gui_finding_details';
import { darkTheme } from '../components/general/ThemeColors';

export default function FindingsPage() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={<FindingsOverview />}
				detailComponent={<FindingsDetails />}
			/>
		</ThemeProvider>
	);
}
