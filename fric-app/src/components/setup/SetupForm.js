/**
 * This component contains the form that is embedded in the SetupModal.
 * 
 * Created by Marco Soto
 */

import React, { Component, useState } from 'react'
import styles from '../../css/setup/SetupContent.module.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios';

export default function SetupContentView(props) {

	const [eventName, setEventName] = useState("");
	const [userName, setUserName] = useState("");
	
	function handleEventNameChange(e) {
		setEventName(e.target.value);
	}

	function handleUserNameChange(e) {
		setUserName(e.target.value);
	}

	const onSubmit = (e) => {
		e.preventDefault();
		
		console.log(eventName)
		console.log(userName)

		let users = [userName];
		
		const newEvent = {
			name: eventName,
			description: "Default",
			type: "Default",
			version: 1,
			assessmentDate: new Date().toString(),
			organization: "Default",
			securityGuide: "Default",
			classification: "Default",
			declassified: "Default",
			customer: "Default",
			archived: "Default",
			team: users
		}
		
		console.log(newEvent);

		axios.post('http://localhost:5000/events/add', newEvent)
			.then(response => console.log(response.data));

		window.location = '/';

	}
	//const [showingIPForm, showIPForm] = useState(false);
	return (
		<>
			<h5 className={styles.title}>Findings and Reportings Information Console (FRIC)</h5>
			<Form id="setupContentForm" className={styles.setupContentForm}>
				<Form.Group controlId="">
					<Form.Label>There is no existing event in your local system</Form.Label>
					<Form.Control type="text" placeholder="Enter event" onChange={handleEventNameChange}/>
				</Form.Group>

				<Form.Group class="setupContentButton" controlId="">
					<Form.Label>Pleaser enter your initials:</Form.Label>
					<Form.Control type="text" placeholder="Enter initials" onChange={setUserName} />
				</Form.Group>
				{/*
				<Form.Group controlId="">
					<Form.Check custom id="eventCheckbox" type="checkbox" label="Create as new event" className={styles.eventCheckbox} />
					<Form.Check custom onClick={() => showIPForm(!showingIPForm)} id="syncCheckbox" type="checkbox" label="First time sync with lead analyst" />
				</Form.Group>

				{showingIPForm && <Form.Group controlId="">
					<Form.Label>Please enter the lead analysts IP address.</Form.Label>
					<Form.Control type="text" placeholder="Enter lead analyst IP address." />
				</Form.Group>}
				*/}
				<Form.Group className={styles.center}>
					<Button onClick={onSubmit} className={styles.setupContentButton} variant="primary">Submit</Button>
					<Button onClick={props.onCancel} className={styles.setupContentButton} variant="danger">Cancel</Button>
				</Form.Group>
			</Form>
		</>
	);
}
