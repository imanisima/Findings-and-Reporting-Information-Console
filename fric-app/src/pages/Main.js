/**
 * 
 */

import axios from 'axios';
import cookie from 'cookie';
import React, { useState, useLayoutEffect } from 'react';
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

	const reload = () => {
		setContentIsLoading(true);
		
		axios.get('http://localhost:5000/events/summary', {
			params: {
				id: event_id
			},
		})
			.then(res => {
				console.log(res)
				if (res.status === 404 || res.status === 400) setSetupDialogOpen(true);
				else if (res.data) setEvent(res.data);
				setContentIsLoading(false);
			})
			.catch(err => {
				//TODO: display error message
				setSetupDialogOpen(true);
				console.log(err);
			})
	};

	useLayoutEffect(() => reload(), []);

	const handleSetupAction = () => {
		console.log('cookie: ' + document.cookie);
		reload();
		setSetupDialogOpen(false);
	};

	return (
		// Added dark theme provider, remove for normal color
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate mainContentComponent={
				(contentIsLoading) ? <Spinner /> : (event) ? <OverviewCards /> : <h1>Error{/*TODO: Make error message*/}</h1>
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
