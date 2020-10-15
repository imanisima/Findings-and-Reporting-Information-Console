/**
 * 
 */

import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
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

	useEffect(() => {
		var eventid;

		async function fetch() {
			await axios.get('http://localhost:5000/events', {
				params: {}
			})
				.then(res => {
					// console.log(res.data[0]._id);
					eventid = res.data[0]._id;
				})
				.catch(err => {
					console.log(err);
				})
			
			await axios.get('http://localhost:5000/events', {
				params: {
					id: eventid
				}
			})
				.then(res => {
					console.log(res.data[0]);
					setEvent(res.data[0]);
					setContentIsLoading(false);
				})
				.catch(err => {
					console.log(err);
					//TODO: display error message
				});
		};
		fetch();
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
									<EventForm event={event} />
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
