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
import Select from '@material-ui/core/Select';
// import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
// import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import Form from 'react-bootstrap/Form'

import { Priority, Progression } from '../../shared/EnumeratedTypes';
import Multiselect from '../general/Multiselect.js'
import * as TaskContext from './TaskContext';

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

export default function TaskForm(props) {
	const {name, setName} = useContext(TaskContext.TaskNameContext);
	const {description, setDescription} = useContext(TaskContext.TaskDescriptionContext);
	const {progress, setProgress} = useContext(TaskContext.TaskProgressContext);
	const {priority, setPriority} = useContext(TaskContext.TaskPriorityContext);
	const {relatedTasks, setRelatedTasks} = useContext(TaskContext.TaskRelatedTasksContext);
	const {analysts, setAnalysts} = useContext(TaskContext.TaskAnalystsContext);
	const {collabs, setCollabs} = useContext(TaskContext.TaskCollaboratorsContext);
	const {dueDate, setDueDate} = useContext(TaskContext.TaskDueDateContext);
	const classes = useStyles();

	return (
		<Form className={classes.formContainer}>
			{/* Title Text Field */}
			<Form.Group>
				<FormLabel style={{ display: "block" }}>Name</FormLabel>
				<Form.Control type="text" placeholder="Title" onChange={e => setName(e.target.value)} value={name} />
			</Form.Group>

			{/* Description Text Field */}
			<Form.Group>
				<FormLabel style={{ display: "block" }} >Description</FormLabel>
				<Form.Control as="textarea" rows="3" placeholder="Description" onChange={e => setDescription(e.target.value)} value={description} />
			</Form.Group>

			{/* Due Date Picker */}
			<Form.Group>
				<FormLabel style={{ display: "block" }}>Due Date</FormLabel>
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
			</Form.Group>

			<div>
				{/* Progress Selector */}
				<Form.Group style={{ display: 'inline-block' }}>
					<FormLabel style={{ display: "block" }}>Progress</FormLabel>
					<FormControl className={classes.formControl}>
						{/* <InputLabel id=" select-outlined-label"></InputLabel> */}
						<Select
							labelId="select-outlined-label"
							id="select-outlined"
							value={progress}
							onChange={e => { setProgress(e.target.value) }}
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
				</Form.Group>

				{/* Priority Selector */}
				<Form.Group style={{ display: 'inline-block' }}>
					<FormLabel style={{ display: "block" }}>Priority</FormLabel>
					<FormControl className={classes.formControl}>
						{/* <InputLabel id=" select-outlined-label"></InputLabel> */}
						<Select
							labelId="select-outlined-label"
							id="select-outlined"
							value={priority}
							onChange={e => { setPriority(e.target.value) }}
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
				</Form.Group>
			</div>

			<div>
				{/* Analysts Multiselect */}
				<Form.Group style={{ display: "inline-block" }}>
					<FormLabel style={{ display: "block" }}>Select Analysts</FormLabel>
						<Multiselect
							options={[]} //TODO: request options
							value={analysts}
							label="Analysts"
							withInitialsAvatar
						/>
				</Form.Group>

				{/* Collaborators Multiselect */}
				<Form.Group style={{ display: "inline-block" }}>
					<FormLabel style={{ display: "block" }}>Select Collaborators</FormLabel>
						<Multiselect
							options={[]} //TODO: request options
							value={collabs}
							label="Collabs"
							withInitialsAvatar
						/>
				</Form.Group>

				{/* Related Tasks Multiselect */}
				<Form.Group style={{ display: "inline-block" }}>
					<FormLabel style={{ display: "block" }}>Select Related Tasks</FormLabel>
						<Multiselect
							options={[]} //TODO: request options
							value={relatedTasks}
							label="Tasks"
						/>
				</Form.Group>
			</div>
		</Form>
	);
}
