/**
 * 
 */

import React from 'react';
import MainNav from '../bootstrap/FRIC_gui_navbar.js';
import EventsOverview from '../components/event/FRIC_gui_event_overview'
import EventDetailView from '../components/event/FRIC_gui_event_detailview'

export default function Event() {
	return (
		<>
			<MainNav />
			<EventsOverview />
			<EventDetailView/>
		</>
	);
}
