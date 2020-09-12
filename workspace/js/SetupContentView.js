/*
 * 
 */

let React = require('react')
let ReactDOM = require('react-dom')

class SetupContentView extends React.Component {
	constructor(props) { }

	render() {
		return (
			<div>
				<h3>Findings and Reporting Information Console (FRIC)</h3>
				<label for="event">There is no existig event in your local system</label>
				<input name="event" type="text"/>
				<label for="initials">Please enter your intitials:</label>
				<input name="initials" type="text"/>
				<label for="new-event">Create a new event</label>
				<input name="new-event" type="checkbox"/>
				<label for="lead-analyst-sync">First time sync with lead analyst. Please enter the lead analysts IP address.</label>
				<input type="checkbox"/>
				<input type="text"/>
				<button type="button">Submit</button>
				<button type="button">Cancel</button>
			</div>
		)
	}
}