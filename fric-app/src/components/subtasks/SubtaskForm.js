/*
 *
 */

import React, { useState, useEffect, useContext } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import Form from 'react-bootstrap/Form';

import { SubtaskContext } from './SubtaskContext';
import { Priority, Progression } from '../../shared/EnumeratedTypes';
import Multiselect from '../general/Multiselect.js';

const useStyles = makeStyles((theme) => ({
	formContainer: {
		padding: "0em 1em 0em 1em",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function SubtaskForm(props) {
	const {
		name, setName,
		description, setDescription,
		progress, setProgress,
		priority, setPriority,
		relatedTasks, setRelatedTasks,
		analysts, setAnalysts,
		collabs, setCollabs,
		/* attachment, setAttachment, */ //TODO: Add file attachment field to form
		dueDate, setDueDate,
		/* archived, setArchived */ //TODO: Add archived checkbox to form
	} = useContext(SubtaskContext); //TODO: error handle nonexistent context values
	const classes = useStyles();

	return (
		<Form className={classes.formContainer}>
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
						value={dueDate}
						onChange={date => { setDueDate(date) }}
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
						onChange={e => setProgress(e.target.value)}
					>
						<MenuItem key="null" value="">None</MenuItem>
						{props.options.progress.map((el, ind) => {
							return <MenuItem key={ind} value={el}>{el}</MenuItem>
						})}
					</Select>
				</FormControl>
			</Form.Group>

			{/* Analysts Multiselect */}
			<Form.Group style={{ display: "inline-block" }}>
				<Form.Label style={{ display: "block" }}>Select Analyst</Form.Label>
				<Multiselect options={props.options.analysts} withInitialsAvatar label="Analysts" />
			</Form.Group>

			{/* Collaborators Multiselect */}
			<Form.Group style={{ display: "inline-block" }}>
				<Form.Label style={{ display: "block" }}>Select Collaborators</Form.Label>
				<Multiselect options={props.options.collabs} withInitialsAvatar label="Collabs" />
			</Form.Group>

			{/* Tasks Multiselect */}
			<Form.Group style={{ display: "inline-block" }}>
				<Form.Label style={{ display: "block" }}>Select Tasks</Form.Label>
				<Multiselect options={props.options.tasks} label="Tasks" />
			</Form.Group>

			{/* Subtasks Multiselect */}
			<Form.Group style={{ display: "inline-block" }}>
				<Form.Label>Select Subtasks</Form.Label>
				<Multiselect options={props.options.subtasks} label="Subtasks" />
			</Form.Group>

			{/* Attachment file selector */}
			<Form.Group>
				<Form.Label>Attachments</Form.Label>
				<Form.File id="custom-file" label="No File Selected" feedback custom />
			</Form.Group>
		</Form>
	);
}
