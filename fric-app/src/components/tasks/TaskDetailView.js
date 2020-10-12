/*
 *
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
// import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Form from 'react-bootstrap/Form'
import 'date-fns';

import Multiselect from '../general/Multiselect.js'
import { Priority, Progression } from '../general/EnumeratedTypes';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function TaskDetailView(props) {
	const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [progress, setProgress] = useState('');
	const [priority, setPriority] = useState('');
	const [relatedTasks, setRelatedTasks] = useState([]);
	const [analysts, setAnalysts] = useState([]);
	const [collabs, setCollabs] = useState([]);


	const classes = useStyles();

	const renderTooltip = (props) => (
		<Tooltip id="help-tooltip" {...props} >
			Helpful tooltip goes here...
		</Tooltip>
	);
	
	const handleSaveClick = () => {
		const newTask = {
			name: name,
			description: description,
			progress: progress,
			priority: priority,
			tasks: relatedTasks,
			analysts: analysts,
			collabs: collabs,
		};
		console.log(newTask);

		//TODO: send post request to save data

		props.closeDetailAction();
	};

	useEffect(() => {
		//TODO: fetch task object from db using id
		//TODO: set state values using fetched object fields
		console.log(props.selectedTask);

		if (props.selectedTask != null) {
			setName(props.selectedTask.name);
			setDescription(props.selectedTask.description);
			setSelectedDate(props.selectedTask.dueDate);
			setPriority(props.selectedTask.priority);
			setProgress(props.selectedTask.progress);
			setRelatedTasks(props.selectedTask.tasks);
		}
	}, [props.selectedTask])

	return (
		<Form style={{ padding: "3em 4em 3em 4em" }}>
			<div style={{ textAlign: "center" }}>
				<h4 style={{ display: "inline-block", padding: "0.3em" }}>Task Detail View</h4>
				<OverlayTrigger
					placement="bottom"
					delay={{ show: 320, hide: 200 }}
					overlay={renderTooltip}
				>
					<HelpOutlineRoundedIcon size="large" style={{ verticalAlign: "middle" }} />
				</OverlayTrigger>
			</div>
			{/* <Button variant="light"><HelpOutlineRoundedIcon /></Button> */}


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
					{/* {
						(props.options != null && props.options.analysts != null) && (
							<Multiselect options={props.options.analysts} value={props.selectedTask.analysts} withInitialsAvatar label="Analysts" />
						)
					} */}
				</Form.Group>

				{/* Collaborators Multiselect */}
				<Form.Group style={{ display: "inline-block" }}>
					<FormLabel style={{ display: "block" }}>Select Collaborators</FormLabel>
					{/* {
						(props.options != null && props.options.analysts != null) && (
							<Multiselect options={props.options.analysts} value={props.selectedTask.collabs} withInitialsAvatar label="Collabs" />
						)
					} */}
				</Form.Group>

				{/* Related Tasks Multiselect */}
				<Form.Group style={{ display: "inline-block" }}>
					<FormLabel style={{ display: "block" }}>Select Related Tasks</FormLabel>
					{/* {
						(props.options != null && props.options.tasks != null) && (
							<Multiselect options={props.options.tasks} value={props.selectedTask.tasks} label="Tasks" />
						)
					} */}
				</Form.Group>
			</div>

			{/* Action Buttons */}
			<Form.Group>
				<Button
					onClick={handleSaveClick}
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

TaskDetailView.propTypes = {
	selectedTask: PropTypes.object.isRequired,
	options: PropTypes.object.isRequired,
	closeDetailAction: PropTypes.func,
}
