/**
 * This component contains the form that is embedded in the SetupModal.
 * 
 * Created by Marco Soto
 */

import React, { useState } from 'react'
import styles from '../../css/setup/SetupContent.module.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function SetupContentView(props) {
	const [showingIPForm, showIPForm] = useState(false);

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
					<Button className={styles.setupContentButton} variant="primary">Submit</Button>
					<Button onClick={props.onCancel} className={styles.setupContentButton} variant="danger">Cancel</Button>
				</Form.Group>
			</Form>
		</>
	);
}
