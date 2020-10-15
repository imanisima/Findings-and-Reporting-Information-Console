/**
 * 
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import LayoutTemplate from '../components/general/LayoutTemplate';
import EventForm from '../components/events/EventForm';
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
	const [event, setEvent] = useState(defaultEventState); //TODO: Extract from context

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
			axios.put('http://localhost:5000', {
				params: {
					...event,
					assessed: event.assessed.toLocaleDateString(),
					declassified: event.declassified.toLocaleDateString(),
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
						<EventContext.Provider value={{ event, setEvent }}>
							<EventForm event={event} />
							<div style={{float: 'right'}}>
								<Button
									onClick={saveChanges}
									variant="contained"
									size="large"
									startIcon={<SaveIcon />}
									color="primary"
								>Save Changes</Button>
							</div>
						</EventContext.Provider>
					</>
				}
			/>
		</ThemeProvider>
	);
}
