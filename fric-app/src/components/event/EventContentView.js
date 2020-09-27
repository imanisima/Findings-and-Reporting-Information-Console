import React from 'react';
import EventOverviewTable from "./EventOverviewTable";
import EventDetailView from "./EventDetailView";
import { data, headings, eventTestObject, options } from "../general/eventstestdata"; //TODO: remove test data import when connected to backend

export default function EventContentView() {
	return (
		<>
			{/* <EventOverviewTable rows={data} headings={headings} /> */}
			<EventDetailView selectedEvent={eventTestObject} options={options} />
		</>
	);
}
