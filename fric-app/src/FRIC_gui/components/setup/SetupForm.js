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

class SetupContentView extends Component{
	constructor(props) {
		super(props);

		this.state = {
			eventName: '',
			users: []
		}

		this.onChangeEventName = this.onChangeEventName.bind(this);
		this.onAddUserName = this.onAddUserName.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

	}
	
	onChangeEventName(e) {
		this.setState({
			eventName: e.target.value
		})
	}

	onAddUserName(e) {
		this.setState({
			users: this.state.users.concat(e)
		})
	}

	onSubmit(e) {
		e.preventDefault();

		const newEvent = {
			name: this.state.eventName,
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
			team: []
		}
		
		console.log(newEvent);

		axios.post('http://localhost:5000/events/add', newEvent)
			.then(response => console.log(response.data));

	}
	//const [showingIPForm, showIPForm] = useState(false);
	render() {
		return (
			<>
				<h5 className={styles.title}>Findings and Reportings Information Console (FRIC)</h5>
				<Form id="setupContentForm" className={styles.setupContentForm}>
					<Form.Group controlId="">
						<Form.Label>There is no existing event in your local system</Form.Label>
						<Form.Control type="text" placeholder="Enter event" onChange={this.onChangeEventName} />
					</Form.Group>

					<Form.Group class="setupContentButton" controlId="">
						<Form.Label>Pleaser enter your initials:</Form.Label>
						<Form.Control type="text" placeholder="Enter initials" onChange={this.onAddUserName} />
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
						<Button onClick={this.onSubmit} className={styles.setupContentButton} variant="primary">Submit</Button>
						<Button onClick={this.props.onCancel} className={styles.setupContentButton} variant="danger">Cancel</Button>
					</Form.Group>
				</Form>
			</>
		);
	}
}

export default SetupContentView
