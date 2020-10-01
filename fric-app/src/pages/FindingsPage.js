/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutSkeleton from '../components/general/LayoutSkeleton';
import FindingsOverview from '../components/findings/FRIC_gui_findings_overview';
import FindingsDetails from '../components/findings/FRIC_gui_finding_details';
import { darkTheme } from '../components/general/ThemeColors';

export default function FindingsPage() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutSkeleton
				mainContentComponent={<FindingsOverview />}
				detailComponent={<FindingsDetails />}
			/>
		</ThemeProvider>
	);
}
