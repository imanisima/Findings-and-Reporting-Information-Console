import axios from 'axios';
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import SystemForm from './SystemForm';
import { SystemContext } from './SystemContext';
import styles from '../../css/subtasks/NewSubtaskDialog.module.css';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewSystemDialog(props) {
	const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [router, setRouter] = useState('');
    const [switchName, setSwitchName] = useState('');
    const [room, setRoom] = useState('');
    const [testPlan, setTestPlan] = useState('');
    const [archived, setArchived] = useState('');

	const systemProviderValue = useMemo(() => ({
		name, setName,
		description, setDescription,
		location, setLocation,
        router, setRouter,
        switchName, setSwitchName,
        room, setRoom,
		testPlan, setTestPlan, 
        archived, setArchived,
    }), [name, description, location,
        router, switchName, room,  testPlan, 
        archived]);

	const handleSubmit = () => {
		console.log("Submit Pressed")
		const newSystem = {
			name: name,
			description: description, 
			location: location,
			router: router,
			switch: switchName,
			room: room, 
            testPlan: testPlan,
			archived:false
		
		}
			console.log(newSystem)
		axios.post('http://localhost:5000/systems/add', newSystem)
			.then(res => {
				console.log(res);
				props.reload();
				handleClose();
			})
			.catch(err => {
				//TODO: display error message
				console.log(err);
			});
	};
    
	const handleClose = () => {
		// Reset values so they aren't displayed when dialog is shown again
		setName('');
		setDescription('');
		setLocation ('');
        setRouter('');
        setSwitchName('');
		setRoom('');
		setTestPlan('');
        setArchived('');
		props.closeDialogAction(); // Close the dialog window
	}; 

	return (
		<Dialog
			open={props.isOpen}
			TransitionComponent={Transition}
			scroll="body"
            keepMounted
            fullWidth={true}
			maxWidth={'md'}
			disableBackdropClick
			onClose={handleClose}
			aria-labelledby="slide-dialog-title"
			aria-describedby="slide-dialog-description"
		>
			<DialogTitle id="scroll-dialog-title" className={styles.title}>Create New Finding</DialogTitle>
			<DialogContent dividers={true}>
				<SystemContext.Provider value={systemProviderValue}>
					<SystemForm 
					
					/>
				</SystemContext.Provider>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleSubmit} variant="contained" size="large" color="primary">Submit</Button>
				<Button onClick={handleClose} variant="contained" size="large" color="secondary">Cancel</Button>
			</DialogActions>
		</Dialog>
	);
}

NewSystemDialog.propTypes = {
    systemArray: PropTypes.object,
	isOpen: PropTypes.bool.isRequired,
	closeDialogAction: PropTypes.func.isRequired,
	reload: PropTypes.func.isRequired,
}
