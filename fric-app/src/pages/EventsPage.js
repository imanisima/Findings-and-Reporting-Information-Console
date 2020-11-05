/**
 * 
 */

import axios from 'axios';
import cookie from 'cookie';
import React, { useState, useLayoutEffect, useMemo } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import LayoutTemplate from '../components/general/LayoutTemplate';
import EventForm from '../components/events/EventForm';
import Spinner from '../components/general/Spinner';
import { EventContext } from '../components/events/EventContext';
import { darkTheme } from '../components/general/ThemeColors';

const defaultEventState = {
	name: '',
	description: '',
	classification: '',
	customer: '',
	assessed: new Date(),
	declassified: new Date(),
	organization: '',
	securityGuide: '',
	type: '',
	version: '',
	team: [],
};

export default function EventsPage() {
	const [contentIsLoading, setContentIsLoading] = useState(true);
	const [event, setEvent] = useState(defaultEventState); //TODO: Extract from context
	const eventValue = useMemo(() => ({event, setEvent}), [event]);

	useLayoutEffect(() => {
		(async () => {
			let c = cookie.parse(document.cookie);
			
			if (c && c.event_id) {
				await axios.get('http://localhost:5000/events', {
					params: {
						id: c.event_id
					}
				})
					.then(res => {
						console.log(res);
						setEvent(res.data);
						setContentIsLoading(false);
					})
					.catch(err => {
						console.log(err);
						//TODO: display error message
					});
			}
			else window.location = '/';
		})();
	}, []);

	const saveChanges = () => {
		if (event != null) {
			event['id'] = event._id // Standardize id parameter
			delete(event['_id']);

			axios.put('http://localhost:5000/events/update', {
				params: {
					...event,
					assessed: event.assessed,
					declassified: event.declassified,
				}
			})
				.then(res => {
					console.log('Success!');
				})
				.catch(err => {
					console.log(err);
					//TODO: display error notification
				})
		} else throw Error();
	};

	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={
					<>
						{
							(contentIsLoading) ? <Spinner /> : (
								<EventContext.Provider value={eventValue}>
									<EventForm event={event} style={{ padding: "20em 10em 0 1em" }} />
									<div style={{ float: 'right' }}>
										<Button
											onClick={saveChanges}
											variant="contained"
											size="large"
											startIcon={<SaveIcon />}
											color="primary"
										>Save Changes</Button>
									</div>
								</EventContext.Provider>
							)
						}
					</>
				}
			/>
		</ThemeProvider>
	);
}
