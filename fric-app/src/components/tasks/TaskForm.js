/** 
 * 
 */

import React, { useState, useEffect } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
// import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Form from 'react-bootstrap/Form'

import Multiselect from '../general/Multiselect.js'
import { Priority, Progression } from '../../shared/EnumeratedTypes';

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
	//TODO: extract to contexts
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [progress, setProgress] = useState('');
	const [priority, setPriority] = useState('');
	const [relatedTasks, setRelatedTasks] = useState([]);
	const [analysts, setAnalysts] = useState([]);
	const [collabs, setCollabs] = useState([]);
	const [selectedDate, setSelectedDate] = useState(new Date());
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
						value={selectedDate}
						onChange={date => { setSelectedDate(date) }}
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
