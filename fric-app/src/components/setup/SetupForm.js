/**
 * This component contains the form that is embedded in the SetupModal.
 * 
 * Created by Marco Soto
 */

import React, { useState } from 'react'
import styles from '../../css/setup/SetupContent.module.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

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
					derivedFrom: "",
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
			<h5 className={styles.title}>Findings and Reportings Information Console (FRIC)</h5>
			<Form id="setupContentForm" className={styles.setupContentForm}>
				<Form.Group controlId="">
					<Form.Label>There is no existing event in your local system</Form.Label>
					<Form.Control type="text" placeholder="Enter event" />
				</Form.Group>

				<Form.Group class="setupContentButton" controlId="">
					<Form.Label>Pleaser enter your initials:</Form.Label>
					<Form.Control type="text" placeholder="Enter initials" />
				</Form.Group>
				
				<Form.Group controlId="">
					<Form.Check custom id="eventCheckbox" type="checkbox" label="Create as new event" className={styles.eventCheckbox} />
					<Form.Check custom onClick={() => showIPForm(!showingIPForm)} id="syncCheckbox" type="checkbox" label="First time sync with lead analyst" />
				</Form.Group>

				{showingIPForm && <Form.Group controlId="">
					<Form.Label>Please enter the lead analysts IP address.</Form.Label>
					<Form.Control type="text" placeholder="Enter lead analyst IP address." />
				</Form.Group>}

				<Form.Group className={styles.center}>
					<Button onClick={handleSubmitClick} variant="contained" size="large" color="primary">Submit</Button>
				</Form.Group>
			</Form>
		</>
	);
}
