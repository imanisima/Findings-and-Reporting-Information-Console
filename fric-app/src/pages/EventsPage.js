/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutSkeleton from '../components/general/LayoutSkeleton';
import EventOverviewTable from '../components/event/EventOverviewTable';
import EventDetailView from '../components/event/EventDetailView';
import { darkTheme } from '../components/general/ThemeColors';
import { data, headings, eventTestObject, options } from '../components/general/test/eventstestdata'; //TODO: remove test data import when connected to backend

export default function EventsPage() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutSkeleton
				mainContentComponent={<EventOverviewTable rows={data} headings={headings} />}
				detailComponent={<EventDetailView selectedEvent={eventTestObject} options={options} />}
			/>
		</ThemeProvider>
	);
}
