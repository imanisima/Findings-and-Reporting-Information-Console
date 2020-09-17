/*
 *
 */

import 'date-fns';
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Form from 'react-bootstrap/Form'
import Multiselect from './Multiselect.js'
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
	const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
	const [progress, setProgress] = React.useState();

	const classes = useStyles();

	const renderTooltip = (props) => (
		<Tooltip id="help-tooltip" {...props} >
			Helpful tooltip goes here...
		</Tooltip>
	);

	return (
		<>
			<Paper style={{maxWidth: "25em", padding: "2.3em", overflowY: "scroll"}}>
			<Form>
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

				{/* Date Picker */}
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
							{props.options.progress.map((el) => {
								return <MenuItem value={el}>{el}</MenuItem>
							})}
						</Select>
					</FormControl>
				</Form.Group>

				<Form.Group style={{display: "inline-block"}}>
					<Form.Label style={{ display: "block" }}>Select Analyst</Form.Label>
					<Multiselect options={props.options.analysts} label="Analysts" />
				</Form.Group>

				<Form.Group style={{display: "inline-block"}}>
					<Form.Label style={{ display: "block" }}>Select Collaborators</Form.Label>
					<Multiselect options={props.options.collabs} label="Collabs" />
				</Form.Group>

				<Form.Group style={{display: "inline-block"}}>
					<Form.Label style={{ display: "block" }}>Select Tasks</Form.Label>
					<Multiselect options={props.options.tasks} label="Tasks" />
				</Form.Group>

				<Form.Group style={{display: "inline-block"}}>
					<Form.Label>Select Subtasks</Form.Label>
					<Multiselect options={props.options.subtasks} label="Subtasks" />
				</Form.Group>
				
				<Form.Group>
					<Form.Label>Attachments</Form.Label>
					<Form.File id="custom-file" label="No File Selected" feedback custom />
				</Form.Group>
			</Form>
			</Paper>
		</>
	);
}

SubtaskDetailView.propTypes = {
	selectedTask: PropTypes.object.isRequired,
	options: PropTypes.object.isRequired,
}