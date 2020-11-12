/**
 * 
 */

import axios from 'axios';
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import ConfigurationForm from './ConfigurationForm';
import { ConfigurationContext } from './ConfigurationContext';
import styles from '../../css/configurations/NewConfigurationDialog.module.css';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewConfigurationDialog(props) {
	const [value, setValue] = useState('');
	const [description, setDescription] = useState('');
	const configProviderValue = useMemo(() => ({
		value, setValue,
		description, setDescription,
	}), [value, description]);

	const handleSubmitClick = () => {
		axios.post('http://localhost:5000/configure/new', {
			params: {
				type: props.configType,
				value: value,
				description: description,
			}
		})
			.then(res => {
				console.log(res);
				if (res.status === 201) {
					props.reload();
					handleCancelClick();
				}
			})
			.catch(err => {
				//TODO: display error message
				console.log(err.response);
			});
	};

	const handleCancelClick = () => {
		// Reset state values so they aren't displayed when dialog is shown again
		setValue('');
		setDescription('');
		props.closeDialogAction(); // Close the dialog window
	};

	return (
		<Dialog
			open={props.isOpen}
			TransitionComponent={Transition}
			scroll="body"
			keepMounted
			disableBackdropClick
			onClose={handleCancelClick}
			aria-labelledby="slide-dialog-title"
			aria-describedby="slide-dialog-description"
		>
			<DialogTitle id="scroll-dialog-title" className={styles.title}>Create New Configuration{/* TODO: bind to configuration type */}</DialogTitle>
			<DialogContent dividers={true}>
				<ConfigurationContext.Provider value={configProviderValue}>
					<ConfigurationForm />
				</ConfigurationContext.Provider>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleSubmitClick} variant="contained" size="large" color="primary">Submit</Button>
				<Button onClick={handleCancelClick} variant="contained" size="large" color="secondary">Cancel</Button>
			</DialogActions>
		</Dialog>
	);
}

NewConfigurationDialog.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	closeDialogAction: PropTypes.func.isRequired,
	reload: PropTypes.func.isRequired,
	baseURL: PropTypes.string.isRequired,
	configTitle: PropTypes.string.isRequired,
	configType: PropTypes.string.isRequired,
}
