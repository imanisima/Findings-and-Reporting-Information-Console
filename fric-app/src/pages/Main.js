/**
 * 
 */

import axios from 'axios';
import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

import { darkTheme } from '../components/general/ThemeColors';
import LayoutTemplate from '../components/general/LayoutTemplate';
import SummaryView from '../components/summary/SummaryView';
import SetupForm from '../components/setup/SetupForm';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default class Main extends Component {
	constructor (props) {
		super(props);
	
		this.state = {
			events: null,
			contentIsLoading: true,
			dialogOpen: false,
		};

		this.handleDialogClose = this.handleDialogClose.bind(this);
	}

	componentDidMount() {
		//TODO: get event from user stored browser cookie, otherwise send the following request
		// Send request for events
		axios.get('http://localhost:5000/events')
			.then(response =>  {
				console.log(response.data);
				this.setState({ events: response.data, contentIsLoading: false });
				if (this.state.events == null || this.state.events <= 0)
					this.setState({ dialogOpen: true });
			})
			.catch(error => {
				console.log(error);
				this.setState({ contentIsLoading: false, });
			});
	}

	handleDialogClose() {
		this.setState({ dialogOpen: false });
	}

	render() {
		return (
			// Added dark theme provider, remove for normal color
			<ThemeProvider theme={darkTheme}>
				<LayoutTemplate mainContentComponent={<SummaryView />} />

				<Dialog
					open={this.state.dialogOpen}
					TransitionComponent={Transition}
					keepMounted
					onClose={this.handleDialogClose}
					aria-labelledby="slide-dialog-title"
					aria-describedby="slide-dialog-description"
					disableBackdropClick
				>
					<SetupForm submitAction={this.handleDialogClose} />
				</Dialog>
			</ThemeProvider>
		);
	}
}
