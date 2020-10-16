/**
 * This component contains the form that is embedded in the SetupModal.
 * 
 * Created by Marco Soto
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/setup/SetupForm.module.css';
import Form from 'react-bootstrap/Form'
import axios from 'axios';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';

export default function SetupForm(props) {
	const [radioVal, setRadioVal] = useState('new');
	const [showSync, setShowSync] = useState(false);
	const [user, setUser] = useState(null);
	const [choiceInput, setChoiceInput] = useState(null);
	
	const handleRadioChange = (event) => {
		setRadioVal(event.target.value);
		setShowSync(!showSync)
	};

	const handleSubmitClick = (e) => {
		switch (radioVal) {
			case "new":
				const defaultEvent = {
					name: choiceInput,
					description: "",
					type: "",
					version: "1.0",
					assessmentDate: new Date().toLocaleDateString(),
					organization: "",
					securityGuide: "",
					classification: "",
					declassified: new Date().toLocaleDateString(),
					customer: "",
					archived: false,
					team: [user]
				};

				axios.post('http://localhost:5000/events/new', defaultEvent)
					.then(response => {
						console.log(response.data);
						props.submitAction();
						window.location = '/';
					})
					.catch(error => {
						//TODO: display error message
						console.log(error)
					});
				break;
			case "sync":
				//TODO: Grab database from lead analyst
				//TODO: Store copy of lead analyst database on this system
				//TODO: display error message if request fails
				break;
			default: throw Error;
		}
	}

	return (
		<>
			<DialogContent id="setupContentForm" className={styles.setupContentForm}>
				<Typography variant="h6" className={styles.title}>
					Findings and Reportings Information Console (FRIC)
				</Typography>
				<Typography variant="subtitle1" style={{ color: "#ffc108"}} className={styles.subtitle}>No Events Detected in Your Local System</Typography>

				{/* Enter User Initials */}
				<Form.Group controlId="user">
					<FormLabel>Please enter your initials:</FormLabel>
					<Form.Control type="text" placeholder="Enter user initials" onChange={ e => setUser(e.target.value) } />
				</Form.Group>

				{/* Radio buttons */}
				<FormControl component="fieldset">
					<RadioGroup aria-label="action" name="action" value={radioVal} onChange={handleRadioChange}>
						<FormControlLabel value="new" control={<Radio color="primary" />} label="Create a New Event" />
						<FormControlLabel value="sync" control={<Radio color="primary" />} label="Sync with Lead Analyst" />
					</RadioGroup>
				</FormControl>

				{
					// Reactive radio section
					(showSync) ? (
						// Enter lead analyst ip address
						<Form.Group controlId="sync">
							<FormLabel>Enter Lead Analyst IP Address</FormLabel>
							<Form.Control type="text" placeholder="ex. 1.0.0.1" onChange={ e => setChoiceInput(e.target.value) } />
						</Form.Group>
					) : (
						// Enter event name
						<Form.Group controlId="event">
							<FormLabel>Enter Event Name</FormLabel>
							<Form.Control type="text" placeholder="Enter event" onChange={ e => setChoiceInput(e.target.value) } />
						</Form.Group>
					)
				}

				{/* Submit Button */}
				<Form.Group className={styles.center}>
					<Button onClick={handleSubmitClick} variant="contained" size="large" color="primary">Submit</Button>
				</Form.Group>
			</DialogContent>
		</>
	);
}

SetupForm.propTypes = {
	submitAction: PropTypes.func.isRequired,
}
