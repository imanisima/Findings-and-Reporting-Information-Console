/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import TestComponent from '../components/general/SlideDialog';
import { darkTheme } from '../components/general/ThemeColors';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function TestPage() {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<LayoutTemplate
					mainContentComponent={ <></> }
				/>

				<TestComponent component= {
					<>
						<DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-slide-description">
								Let Google help apps determine location. This means sending anonymous location data to
								Google, even when no apps are running.
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button color="primary">Disagree</Button>
							<Button color="primary">Agree</Button>
						</DialogActions>
					</>
				} closeAction={() => {}}/>
			</ThemeProvider>
		</>
	);
}
