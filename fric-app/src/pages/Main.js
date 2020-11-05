/**
 * 
 */

import axios from 'axios';
import cookie from 'cookie';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { darkTheme } from '../components/general/ThemeColors';
import LayoutTemplate from '../components/general/LayoutTemplate';
import OverviewCards from '../components/summary/OverviewCards';
import SetupForm from '../components/setup/SetupForm';
import Spinner from '../components/general/Spinner';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function Main() {
	var {event_id} = cookie.parse(document.cookie);
	const [event, setEvent] = useState(null);
	const [contentIsLoading, setContentIsLoading] = useState(true);
	const [setupDialogOpen, setSetupDialogOpen] = useState(false);


	const fetchCookie = async () => {
		await axios.get('http://localhost:5000', { withCredentials: true })
			.then(() => {
				const c = cookie.parse(document.cookie);
				if (c == null || !c.event_id) {
					//TODO: display error message
					setSetupDialogOpen(true);
				}
				else {
					console.log(c);
					event_id = c.event_id;
					fetchSummary();
				}
			})
			.catch(err => {
				//TODO: display error message
				setSetupDialogOpen(true);
				console.log(err);
			})
	}

	const fetchSummary = async () => {
		await axios.get('http://localhost:5000/events/summary', {
			params: {
				id: event_id
			},
		})
			.then(res => {
				console.log('Saved event');
				console.log(res.data);
				setEvent(res.data);
				setContentIsLoading(false);
			})
			.catch(err => {
				//TODO: display error message
				console.log(err);
			})
	}

	const reload = () => {
		setContentIsLoading(true);
		if (!event_id) fetchCookie();
		else fetchSummary();
	};

	useEffect(() => reload(), []);

	const handleSetupAction = () => {
		console.log('cookie: ' + document.cookie);
		reload();
		setSetupDialogOpen(false);
	};

	return (
		// Added dark theme provider, remove for normal color
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate mainContentComponent={
				(contentIsLoading) ? <Spinner /> : (
					// (events && events.length > 0) ? <OverviewCards /> : <>{/*TODO:Make error message*/}</>
					(event) ? <OverviewCards /> : <h1>Error{/*TODO:Make error message*/}</h1>
				)
			}/>

			<Dialog
				open={setupDialogOpen}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleSetupAction}
				aria-labelledby="slide-dialog-title"
				aria-describedby="slide-dialog-description"
				disableBackdropClick
			>
				<SetupForm submitAction={handleSetupAction} />
			</Dialog>
		</ThemeProvider>
	);
}
