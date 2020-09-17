/*
 * 
 */
import styles from '../../css/setup/SetupContent.module.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

const React = require('react')
const ReactDOM = require('react-dom')

export default class SetupContentView extends React.Component {
	constructor(props) {
		super(props)
		this.state = {showLeadIPForm: false}
	}

	render() {
		return (
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
					<Form.Check custom id="eventCheckbox" type="checkbox" label="Create as new event" />
					<Form.Check custom onClick={() => this.setState({showLeadIPForm: !this.state.showLeadIPForm})} id="syncCheckbox" type="checkbox" label="First time sync with lead analyst" />
				</Form.Group>

				{this.state.showLeadIPForm && <Form.Group controlId="">
					<Form.Label>Please enter the lead analysts IP address.</Form.Label>
					<Form.Control type="text" placeholder="Enter lead analyst IP address." />
				</Form.Group>}

				<Form.Group className={styles.center}>
					<Button className={styles.setupContentButton} variant="primary">Submit</Button>
					<Button className={styles.setupContentButton} variant="danger">Cancel</Button>
				</Form.Group>
			</Form>
		)
	}
}
