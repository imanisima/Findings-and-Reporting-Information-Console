/** 
 * 
 */

import React, { useContext } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
// import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';

import { TaskContext } from './TaskContext';
import { Priority, Progression } from '../../shared/EnumeratedTypes';
import Multiselect from '../general/Multiselect.js';

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
}));

export default function TaskForm(props) {
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
	} = useContext(TaskContext); //TODO: error handle nonexistent context values
	const classes = useStyles();

	return (
		<form className={classes.formContainer}>
			{/* Title Text Field */}
			<div className={classes.formSection}>
				<FormLabel className={classes.formLabel}>Name</FormLabel>
				<TextField
					required
					fullWidth
					variant="outlined"
					placeholder="Task Name"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</div>

			{/* Description Text Field */}
			<div className={classes.formSection}>
				<FormLabel className={classes.formLabel} >Description</FormLabel>
				<TextField
					required
					fullWidth
					variant="outlined"
					multiline rows="4"
					rowsMax="4"
					placeholder="Task Description"
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
			</div>

			{/* Due Date Picker */}
			<div>
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

			<div className={classes.formSection}>
				{/* Progress Selector */}
				<div style={{ display: 'inline-block' }}>
					<FormLabel className={classes.formLabel}>Progress</FormLabel>
					<FormControl className={classes.formControl}>
						{/* <InputLabel id=" select-outlined-label"></InputLabel> */}
						<Select
							labelId="select-outlined-label"
							id="select-outlined"
							value={progress}
							onChange={e => setProgress(e.target.value)}
							label=""
						>
							<MenuItem key="null" value="">None</MenuItem>
							{
								Object.values(Progression).map((el, ind) => {
									return <MenuItem key={ind} value={el}>{el}</MenuItem>
								})
							}
						</Select>
					</FormControl>
				</div>

				{/* Priority Selector */}
				<div style={{ display: 'inline-block' }}>
					<FormLabel className={classes.formLabel}>Priority</FormLabel>
					<FormControl className={classes.formControl}>
						{/* <InputLabel id=" select-outlined-label"></InputLabel> */}
						<Select
							labelId="select-outlined-label"
							id="select-outlined"
							value={priority}
							onChange={e => setPriority(e.target.value)}
							label=""
						>
							<MenuItem key="null" value="">None</MenuItem>
							{
								Object.values(Priority).map((el, ind) => {
									return <MenuItem key={ind} value={el}>{el}</MenuItem>
								})
							}
						</Select>
					</FormControl>
				</div>
			</div>

			<div className={classes.formSection}>
				{/* Analysts Multiselect */}
				<div style={{ display: "inline-block" }}>
					<FormLabel className={classes.formLabel}>Select Analysts</FormLabel>
						<Multiselect
							options={[]} //TODO: request options
							value={analysts}
							label="Analysts"
							withInitialsAvatar
							setter={setAnalysts}
						/>
				</div>

				{/* Collaborators Multiselect */}
				<div style={{ display: "inline-block" }}>
					<FormLabel className={classes.formLabel}>Select Collaborators</FormLabel>
						<Multiselect
							options={[]} //TODO: request options
							value={collabs}
							label="Collabs"
							withInitialsAvatar
							setter={setCollabs}
						/>
				</div>

				{/* Related Tasks Multiselect */}
				<div style={{ display: "inline-block" }}>
					<FormLabel className={classes.formLabel}>Select Related Tasks</FormLabel>
						<Multiselect
							options={[]} //TODO: request options
							value={relatedTasks}
							label="Tasks"
							setter={setRelatedTasks}
						/>
				</div>
			</div>
		</form>
	);
}