/*
 *
 */

import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
// import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';

import { SubtaskContext } from './SubtaskContext';
import { Progression } from '../../shared/EnumeratedTypes';
import Multiselect from '../general/Multiselect.js';
import FileBrowseField from '../general/FileBrowseField';

import { options } from '../general/test/subtaskstestdata'; //TODO: remove once selector options are fetched from database

const useStyles = makeStyles((theme) => ({
	formContainer: {
		padding: "0em 1em 0em 1em",
	},
	formSection: {
		padding: "1em 0 1em 0",
	},
	formLabel: {
		display: "block",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	inline: {
		display: "inline-block",
	},
}));

export default function SubtaskForm(props) {
	const classes = useStyles();
	const {
		name, setName,
		description, setDescription,
		progress, setProgress,
		ownerTask, setOwnerTask,
		relatedSubtasks, setRelatedSubtasks,
		analysts, setAnalysts,
		collabs, setCollabs,
		attachment, setAttachment, //TODO: Add file attachment field to form
		dueDate, setDueDate,
		/* archived, setArchived */ //TODO: Add archived checkbox to form
	} = useContext(SubtaskContext); //TODO: error handle nonexistent context values

	useEffect(() => {
		//TODO: fetch multiselector options
		axios.get('http://localhost:5000/options/subtasks')
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
				//TODO: display error message
			});
	}, []);

	return (
		<form className={classes.formContainer}>
			{/* Name Text Field */}
			<div className={classes.formSection}>
				<FormLabel className={classes.formLabel}>Name</FormLabel>
				<TextField
					required
					fullWidth
					variant="outlined"
					placeholder="Subtask Name" 
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</div>

			{/* Description Text Field */}
			<div className={classes.formSection}>
				<FormLabel className={classes.formLabel}>Description</FormLabel>
				<TextField
					required
					fullWidth
					variant="outlined"
					multiline
					rows="4"
					rowsMax="4"
					placeholder="Description of Subtask"
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
			</div>

			<div className={classes.formSection}>
				{/* Due Date Picker */}
				<div className={classes.inline}>
					<FormLabel className={classes.formLabel}>Due Date</FormLabel>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							format="MM/dd/yyyy"
							margin="normal"
							id="date-picker"
							label=""
							value={dueDate}
							onChange={date => setDueDate(date)}
							KeyboardButtonProps={{ 'aria-label': 'change date', }}
						/>
					</MuiPickersUtilsProvider>
				</div>


				{/* Owner Task Dropdown */}
				<div className={classes.inline}>
					<FormLabel className={classes.formLabel}>Select Owner Task</FormLabel>
					<FormControl className={classes.formControl}>
						{/* <InputLabel id=" select-outlined-label"></InputLabel> */}
						<Select
							labelId="select-progress"
							id="select-progress"
							value={''} //TODO: set value
							onChange={e => setOwnerTask(e.target.value)}
						>
							<MenuItem key="null" value="">None</MenuItem>
							{/* TODO: create menu items from task options */}
						</Select>
					</FormControl>
				</div>

				{/* Progress Selector */}
				<div className={classes.inline}>
					<FormLabel className={classes.formLabel}>Progress</FormLabel>
					<FormControl className={classes.formControl}>
						{/* <InputLabel id=" select-outlined-label"></InputLabel> */}
						<Select
							labelId="select-progress"
							id="select-progress"
							value={progress}
							onChange={e => setProgress(e.target.value)}
						>
							<MenuItem key="null" value="">None</MenuItem>
							{Object.values(Progression).map((el, ind) => {
								return <MenuItem key={ind} value={el}>{el}</MenuItem>
							})}
						</Select>
					</FormControl>
				</div>
			</div>
			
			<div className={classes.formSection}>
				{/* Related Subtasks Multiselect */}
				<div className={classes.inline}>
					<FormLabel>Select Related Subtasks</FormLabel>
					<Multiselect options={options.subtasks} label="Subtasks" value={relatedSubtasks} setter={setRelatedSubtasks} />
				</div>

				{/* Analysts Multiselect */}
				<div className={classes.inline}>
					<FormLabel className={classes.formLabel}>Select Analyst</FormLabel>
					<Multiselect options={options.analysts} withInitialsAvatar label="Analysts" value={analysts} setter={setAnalysts} />
				</div>

				{/* Collaborators Multiselect */}
				<div className={classes.inline}>
					<FormLabel className={classes.formLabel}>Select Collaborators</FormLabel>
					<Multiselect options={options.collabs} withInitialsAvatar label="Collabs" value={collabs} setter={setCollabs} />
				</div>
			</div>

			{/* Attachment file selector */}
			<div className={classes.formSection}>
				<FormLabel>Attachment</FormLabel>
				<FileBrowseField value={attachment} setter={setAttachment}/>
			</div>
		</form>
	);
}
