/*
 *
 */

import React, {Component, useState} from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import DatePicker from 'react-datepicker'
// import { Multiselect } from 'multiselect-react-dropdown';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded'


//TODO: Implement multiselector functions
function onSelect(selectedList, selectedItem) {
    return <></>
}

function onRemove(selectedList, removedItem) {
    return <></>
}

const renderTooltip = (props) => (
	<Tooltip id="button-tooltip" {...props}>
		Helpful tooltip goes here...
	</Tooltip>
);

function test() {
  const [startDate, setStartDate] = SubtaskDetailView.useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  );
};


export default class SubtaskDetailView extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dueDate: props.selected.dueDate,

			analysts: props.analysts,
			collaborators: props.collaborators,

			selectedProgress: null,
			selectedAnalyst: null,
			selectedCollaborators: [],
			selectedTask: null,
			selectedSubtask: null,


			options: [{name: 'Srigar', id: 1}, {name: 'Sam', id: 2}]
		}
	}

	render() {
		return (
			<>
				<Form>
					<div>
					<h4 class="test">Subtask Detail View</h4>
					{/* <Button variant="light"><HelpOutlineRoundedIcon /></Button> */}
					<OverlayTrigger className="test" placement="bottom" delay={{ show: 200, hide: 300 }} overlay={renderTooltip}>
						<HelpOutlineRoundedIcon />
					</OverlayTrigger>
					</div>

					{/* Title Text Field */}
					<Form.Group>
						<Form.Label>Title</Form.Label>
						<Form.Control type="text" placeholder="Title" />
					</Form.Group>

					{/* Description Text Field */}
					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control as="textarea" rows="3" placeholder="Description" />
					</Form.Group>

					{/* Date Picker */}
					<Form.Group>
						<Form.Label>Date</Form.Label>

						<DatePicker selected={this.state.dueDate} onChange={date => {this.setState({dueDate: date})}} />
					</Form.Group>

					{/* Progress Selector */}
					<Form.Group>
						<Form.Label>Progress</Form.Label>
						<DropdownButton variant="primary" id="dropdown-progress" title={(this.state.selectedProgress == null) ? "Choose..." : this.state.selectedProgress} size="sm">
							{this.props.progressOptions.map((prog) => {
								return <Dropdown.Item onClick={() => {
									this.setState(() => {
										return {selectedProgress: prog}
									})
								}} key={prog} value={prog}>{prog}</Dropdown.Item>
							})}
						</DropdownButton>
					</Form.Group>

					{/* Analysts Multiselector */}
					<Form.Group>
						<Form.Label>Select Analyst</Form.Label>
						{/* TODO: Implement analysts multiselector and remove dropdown menu */}
						{/* <Multiselect
							options={this.state.options} // Options to display in the dropdown
							selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
							onSelect={this.onSelect} // Function will trigger on select event
							onRemove={this.onRemove} // Function will trigger on remove event
							displayValue="name" // Property name to display in the dropdown options
						/> */}
						<DropdownButton id="dropdown-analysts" title="Choose..." size="sm">
							{this.props.analystOptions.map((analyst) => {
								return <Dropdown.Item onClick={() => {
									this.setState(() => {
										return {selectedAnalyst: analyst}
									})
								}} key={analyst} value={analyst}>{analyst}</Dropdown.Item>
							})}
						</DropdownButton>
					</Form.Group>

					{/* Collaborators Multiselector */}
					<Form.Group>
						<Form.Label>Select Collaborators</Form.Label>
						{/* TODO: Implement collaborators multiselector and remove dropdown menu */}
						{/* <Multiselect
							options={this.state.options} // Options to display in the dropdown
							selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
							onSelect={this.onSelect} // Function will trigger on select event
							onRemove={this.onRemove} // Function will trigger on remove event
							displayValue="name" // Property name to display in the dropdown options
						/> */}
						<DropdownButton id="dropdown-collaborators" title="Choose..." size="sm">
							{this.props.collabOptions.map((collaborator) => {
									return <Dropdown.Item onClick={() => {
										this.setState(state=> {
											return {selectedCollaborator: [...state.selectedCollaborators, collaborator]}
										})
									}} key={collaborator} value={collaborator}>{collaborator}</Dropdown.Item>
							})}
						</DropdownButton>
						
					</Form.Group>

					{/* Tasks Multiselector */}
					<Form.Group>
						<Form.Label>Select Tasks</Form.Label>
						{/* TODO: Implement tasks multiselector and remove dropdown menu */}
						<DropdownButton id="dropdown-tasks" title="Choose..." size="sm">
							{this.props.taskOptions.map((task) => {
									return <Dropdown.Item onClick={() => {
										this.setState(state=> {
											return {selectedTask: task}
										})
									}} key={task} value={task}>{task}</Dropdown.Item>
							})}
						</DropdownButton>
						{/* <Multiselect
							options={this.state.options} // Options to display in the dropdown
							selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
							onSelect={this.onSelect} // Function will trigger on select event
							onRemove={this.onRemove} // Function will trigger on remove event
							displayValue="name" // Property name to display in the dropdown options
						/> */}
					</Form.Group>

					{/* Subtasks Multiselector */}
					<Form.Group>
						<Form.Label>Select Subtasks</Form.Label>
						{/* TODO: Implement subtasks multiselector and remove dropdown menu */}
						{/* <Multiselect
							options={this.state.options} // Options to display in the dropdown
							selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
							onSelect={this.onSelect} // Function will trigger on select event
							onRemove={this.onRemove} // Function will trigger on remove event
							displayValue="name" // Property name to display in the dropdown options
						/> */}
						<DropdownButton id="dropdown-subtasks" title="Choose..." size="sm">
							{this.props.subtaskOptions.map((subtask) => {
									return <Dropdown.Item onClick={() => {
										this.setState(state => {
											return {selectedTask: subtask}
										})
									}} key={subtask} value={subtask}>{subtask}</Dropdown.Item>
							})}
						</DropdownButton>
					</Form.Group>
					
					{/* File Attachment Selector */}
					<Form.Group>
						<Form.Label>Attachments</Form.Label>
						{/* TODO: Display selected file in file attachment selector */}
						<Form.File id="custom-file" label="No File Selected" feedback custom />
					</Form.Group>
				</Form>
			</>
		)
	}
}

