/**
 * 
 */

import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import EventOverviewTable from '../components/events/EventOverviewTable';
import EventDetailView from '../components/events/EventDetailView';
import { darkTheme } from '../components/general/ThemeColors';
import { data, headings, options } from '../components/general/test/eventstestdata'; //TODO: remove test data import when connected to backend

export default function EventsPage() {
	const [selectedEvent, setSelectedEvent] = useState(null);

	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={<EventOverviewTable rows={data} headings={headings} setDetailData={setSelectedEvent} />}
				detailComponent={<EventDetailView selectedEvent={selectedEvent} options={options} />}
			/>
		</ThemeProvider>
	);
}
