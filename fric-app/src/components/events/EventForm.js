/*
 *
 */

import React, { useState, useContext } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import Form from 'react-bootstrap/Form';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
// import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';

// Custom Components
import Multiselect from '../general/Multiselect.js';
import { EventContext } from './EventContext';

import { options } from '../general/test/eventstestdata'; //TODO: remove test data import when connected to backend

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function EventForm(props) {
	const {event, setEvent} = useContext(EventContext); // Grab event object from context. Values set in EventPage.js
	const [leadAnalyst, setLeadAnalyst] = useState(''); //TODO: grab from context, not known by event
	const classes = useStyles();

	return (
		<Form style={{ padding: "3em 4em 3em 4em" }}>
			<div style={{ textAlign: "center" }}>
				<h4 style={{ display: "inline-block", padding: "0.3em" }}>Event Information</h4>
				<HelpOutlineRoundedIcon size="large" style={{ verticalAlign: "middle" }} />
			</div>
			{/* <Button variant="light"><HelpOutlineRoundedIcon /></Button> */}

			{/* Title Text Field */}
			<Form.Group>
				<FormLabel style={{ display: "block" }}>Name</FormLabel>
				<Form.Control type="text" placeholder="Event Name" value={event.name} onChange={e => setEvent({...event, name: e.target.value})} />
			</Form.Group>

			{/* Description Text Field */}
			<Form.Group>
				<FormLabel style={{ display: "block" }}>Description</FormLabel>
				<Form.Control as="textarea" rows="3" placeholder="Event Description" value={event.description} onChange={e => setEvent({ ...event, description: e.target.value})} />
			</Form.Group>

			{/* Version Text Field */}
			<Form.Group>
				<FormLabel style={{ display: "block" }}>Version</FormLabel>
				<Form.Control type="textarea" placeholder="ex. 1.1.4" value={event.version} onChange={e => setEvent({...event, version: e.target.value})} />
			</Form.Group>

			<Form.Group>
				{/* Type Selector */}
				<div style={{display: 'inline-block'}}>
					<FormLabel style={{ display: "block" }}>Event Type</FormLabel>
					<FormControl className={classes.formControl}>
						<Select
							labelId="select-outlined-label"
							id="select-outlined"
							value={event.type}
							onChange={e => setEvent({...event, type: e.target.value})}
							label=""
						>
							<MenuItem key={null} value={''}>None</MenuItem>
							{options.types.map((el, ind) => {
								return <MenuItem key={ind} value={el}>{el}</MenuItem>
							})}
						</Select>
					</FormControl>
				</div>

				{/* Assessment Date Picker */}
				<div style={{display: 'inline-block'}}>
					<FormLabel style={{ display: "block" }}>Assessment Date</FormLabel>
					<MuiPickersUtilsProvider utils={DateFnsUtils} style={{display: 'block'}}>
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							format="MM/dd/yyyy"
							margin="normal"
							id="assess-date-picker"
							label=""
							value={(event != null && event.hasOwnProperty('assessed')) ? new Date(event.assessed) : new Date()}
							onChange={date => setEvent({...event, assessed: date.toLocaleDateString()})}
							KeyboardButtonProps={{ 'aria-label': 'change date', }}
						/>
					</MuiPickersUtilsProvider>
				</div>

				{/* Declassification Date Picker */}
				<div style={{display: 'inline-block'}}>
					<FormLabel style={{ display: "block" }}>Declassification Date</FormLabel>
					<MuiPickersUtilsProvider utils={DateFnsUtils} style={{ display: 'block' }}>
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							format="MM/dd/yyyy"
							margin="normal"
							id="declass-date-picker"
							label=""
							value={(event != null && event.hasOwnProperty('declassified')) ? new Date(event.declassified) : new Date()}
							onChange={date => setEvent({...event, declassified: date.toLocaleDateString()})}
							KeyboardButtonProps={{ 'aria-label': 'change date', }}
						/>
					</MuiPickersUtilsProvider>
				</div>
			</Form.Group>

			{/* Organization Text Field */}
			<Form.Group>
				<FormLabel style={{ display: "block" }}>Organization</FormLabel>
				<Form.Control type="text" placeholder="Organization" value={event.organization} onChange={e => setEvent({...event, organization: e.target.value})} />
			</Form.Group>

			{/* Security Guide Text Field */}
			<Form.Group>
				<FormLabel style={{ display: "block" }}>Classification Title Guide</FormLabel>
				<Form.Control type="text" placeholder="Title Guide" value={event.securityGuide} onChange={e => setEvent({...event, securityGuide: e.target.value})} />
			</Form.Group>

			{/* Customer Text Field */}
			<Form.Group>
				<FormLabel style={{ display: "block" }}>Customer</FormLabel>
				<Form.Control type="text" placeholder="Customer Name" value={event.customer} onChange={e => setEvent({...event, customer: e.target.value})} />
			</Form.Group>

			<div style={{ textAlign: "center" }}>
				<h4 style={{ display: "inline-block", padding: "0.3em" }}>Team Information</h4>
				<HelpOutlineRoundedIcon size="large" style={{ verticalAlign: "middle" }} />
			</div>

			{/* Lead Analyst Dropdown */}
			<Form.Group style={{ display: 'inline-block'}}>
				<FormLabel style={{ display: "block" }}>Lead Analyst</FormLabel>
				<FormControl className={classes.formControl}>
					<Select
						labelId="select-outlined-label"
						id="select-outlined"
						value={leadAnalyst}
						onChange={e => setLeadAnalyst(e.target.value)}
						label=""
					>
						<MenuItem key={null} value={''}>None</MenuItem>
						{options.analysts.map((el, ind) => {
							return <MenuItem key={ind} value={el}>{el}</MenuItem>
						})}
					</Select>
				</FormControl>
			</Form.Group>

			{/* Collaborators Multiselect */}
			<Form.Group style={{ display: "inline-block" }}>
				<FormLabel style={{ display: "block" }}>Select Collaborators</FormLabel>
				<Multiselect options={options.analysts} withInitialsAvatar />
			</Form.Group>
		</Form>
	);
}
