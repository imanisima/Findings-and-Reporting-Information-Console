/*
 *
 */

import 'date-fns';
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Form from 'react-bootstrap/Form'
import Multiselect from '../general/Multiselect.js'
// import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function SubtaskDetailView(props) {
	const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
	const [progress, setProgress] = useState();

	const classes = useStyles();

	const renderTooltip = (props) => (
		<Tooltip id="help-tooltip" {...props} >
			Helpful tooltip goes here...
		</Tooltip>
	);

	return (
		<Form style={{ padding: "3em 4em 3em 4em" }}>
			<div style={{ textAlign: "center"}}>
				<h4 style={{ display: "inline-block", padding: "0.3em"}}>Subtask Detail View</h4>
				<OverlayTrigger
					placement="bottom"
					delay={{ show: 320, hide: 200 }}
					overlay={renderTooltip}
				>
					<HelpOutlineRoundedIcon size="large" style={{verticalAlign: "middle"}}/>
				</OverlayTrigger>
			</div>
			{/* <Button variant="light"><HelpOutlineRoundedIcon /></Button> */}
			

			{/* Title Text Field */}
			<Form.Group>
				<Form.Label style={{ display: "block" }}>Title</Form.Label>
				<Form.Control type="text" placeholder="Title" />
			</Form.Group>

			{/* Description Text Field */}
			<Form.Group>
				<Form.Label style={{ display: "block" }}>Description</Form.Label>
				<Form.Control as="textarea" rows="3" placeholder="Description" />
			</Form.Group>

			{/* Due Date Picker */}
			<Form.Group>
				<Form.Label style={{ display: "block" }}>Date</Form.Label>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<KeyboardDatePicker
						disableToolbar
						variant="inline"
						format="MM/dd/yyyy"
						margin="normal"
						id="date-picker"
						label=""
						value={selectedDate}
						onChange={date => {setSelectedDate(date)}}
						KeyboardButtonProps={{ 'aria-label': 'change date', }}
					/>
				</MuiPickersUtilsProvider>
			</Form.Group>

			{/* Progress Selector */}
			<Form.Group>
				<Form.Label style={{ display: "block" }}>Progress</Form.Label>
				<FormControl className={classes.formControl}>
					{/* <InputLabel id=" select-outlined-label"></InputLabel> */}
					<Select
						labelId="select-outlined-label"
						id="select-outlined"
						value={progress}
						onChange={val => {setProgress(val)}}
						label=""
					>
						{props.options.progress.map((el, ind) => {
							return <MenuItem key={ind} value={el}>{el}</MenuItem>
						})}
					</Select>
				</FormControl>
			</Form.Group>

			{/* Analysts Multiselect */}
			<Form.Group style={{display: "inline-block"}}>
				<Form.Label style={{ display: "block" }}>Select Analyst</Form.Label>
				<Multiselect options={props.options.analysts} withInitialsAvatar label="Analysts" />
			</Form.Group>

			{/* Collaborators Multiselect */}
			<Form.Group style={{display: "inline-block"}}>
				<Form.Label style={{ display: "block" }}>Select Collaborators</Form.Label>
				<Multiselect options={props.options.collabs} withInitialsAvatar label="Collabs" />
			</Form.Group>

			{/* Tasks Multiselect */}
			<Form.Group style={{display: "inline-block"}}>
				<Form.Label style={{ display: "block" }}>Select Tasks</Form.Label>
				<Multiselect options={props.options.tasks} label="Tasks" />
			</Form.Group>
			
			{/* Subtasks Multiselect */}
			<Form.Group style={{display: "inline-block"}}>
				<Form.Label>Select Subtasks</Form.Label>
				<Multiselect options={props.options.subtasks} label="Subtasks" />
			</Form.Group>
			
			{/* Attachment file selector */}
			<Form.Group>
				<Form.Label>Attachments</Form.Label>
				<Form.File id="custom-file" label="No File Selected" feedback custom />
			</Form.Group>

			<Form.Group>
				<Button
					onClick={props.closeDetailAction}
					variant="contained"
					size="large"
					startIcon={<SaveIcon />}
					style={{ backgroundColor: "#ffc108", color: "charcoal", margin: "0.5em", }}
				>Save</Button>
				<Button
					onClick={props.closeDetailAction}
					variant="contained"
					size="large"
					startIcon={<CancelIcon />}
					style={{ backgroundColor: "#dc3545", color: "white", margin: "0.5em", }}
				>Cancel</Button>
			</Form.Group>
		</Form>
	);
}

SubtaskDetailView.propTypes = {
	selectedSubtask: PropTypes.object.isRequired,
	options: PropTypes.object.isRequired,
	closeDetailAction: PropTypes.func,
}
