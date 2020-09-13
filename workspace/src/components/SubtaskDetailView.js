/*
 *
 */

export default SubtaskDetailView

let React = require('react')
let ReactDOM = require('react-dom')

class SubtaskDetailView extends React.Component {
	render() {
		return (
			<div>
				<h3>Subtask Detailed View</h3>
				<button type="button"><img src="">Help</img></button>
				<h4>{this.props.title}</h4>
				<h4>{this.props.description}</h4>
				<h4>{this.props.progress}</h4>
				<h4>{this.props.dueDate}</h4>
				<form>
					<select name="analysts">
						{ this.props.analysts.map((analyst) => {
							<option key="{analyst}" value="{analyst}">{analyst}</option>
						}) }
					</select>

					<select name="collaborators">
						{ this.props.collaborators.map((collaborator) => {
							<option key="{collaborator}" value="{collaborator}">{collaborator}</option>
						}) }
					</select>
					

					<select name="tasks">
						{this.props.tasks.map((task) => {
							<option key="{task}" value="{task}">{task}</option>
						})}
					</select>

					<select name="subtasks">
						{this.props.subtasks.map((subtask) => {
							<option key="{subtask}" value="{subtask}">{subtask}</option>
						})}
					</select>
					<label for="attachments">Attachments:</label>
					<input name="attachments" type="file"/>
				</form>
			</div>
		)
	}
}

