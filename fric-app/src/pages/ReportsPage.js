/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import { darkTheme } from '../components/general/ThemeColors';
import PropTypes from 'prop-types';
import ReportOverview from '../components/reports/ReportOverview'

// import ManualDetails from '../components/manual/ManualDetails';

export default function ReportsPage() {
    
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={<ReportOverview />}
			/>
		</ThemeProvider>
	);
}