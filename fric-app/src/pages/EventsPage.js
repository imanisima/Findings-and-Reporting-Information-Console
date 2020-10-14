/**
 * 
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import EventForm from '../components/events/EventForm';
import { darkTheme } from '../components/general/ThemeColors';

export default function EventsPage() {
	const [event, setEvent] = useState(null); //TODO: Extract from context

	useEffect(() => {
		axios.get('http://localhost:5000/events', {
			params: {}
		})
			.then(res => {
				console.log(res.data[0]);
				setEvent(res.data[0]);
			})
			.catch(err => {
				//TODO: display error message
				console.log(err);
			})
	}, []);

	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={<EventForm event={''} />}
				detailComponent={<></>}
			/>
		</ThemeProvider>
	);
}
