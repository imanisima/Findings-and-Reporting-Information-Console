/**
 * 
 */

import React, {Component} from 'react';
import axios from 'axios';
import { ThemeProvider } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import LayoutTemplate from '../components/general/LayoutTemplate';
import SummaryView from '../components/summary/SummaryView';
import { darkTheme } from '../components/general/ThemeColors';
import SetupForm from '../components/setup/SetupForm';
import Spinner from '../components/general/Spinner';

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
		axios.get('http://localhost:5000/summary')
			.then(res => {
				console.log(res);
				if (res.status === 200) {
					this.setState({contentIsLoading: false});
				}
				else console.log('failure');
			})
			.catch(err => {
				console.log(err);
				//TODO: display error message
				this.setState({contentIsLoading: false});
			});
	}

	handleDialogClose() {
		this.setState({ dialogOpen: false });
	}

	render() {
		return (
			// Added dark theme provider, remove for normal color
			<ThemeProvider theme={darkTheme}>
				<LayoutTemplate mainContentComponent={
					(this.state.contentIsLoading) ? <Spinner /> : (
						(this.state.events != null && this.state.events.length > 0) ? <SummaryView /> : <></>
					)
				} />
				<Dialog
					open={this.state.dialogOpen}
					TransitionComponent={Transition}
					keepMounted
					onClose={this.handleDialogClose}
					aria-labelledby="slide-dialog-title"
					aria-describedby="slide-dialog-description"
					disableBackdropClick
				>
					<SetupForm submitAction={ this.handleDialogClose } />
				</Dialog>
			</ThemeProvider>
		);
	}
}
