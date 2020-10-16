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
import InputLabel from '@material-ui/core/InputLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
// import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';

// Custom Components
import Multiselect from '../general/Multiselect.js';
import { EventContext } from './EventContext';

import { options } from '../general/test/eventstestdata'; //TODO: remove test data import when connected to backend

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: "0 6em 0 6em",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	textfield: {
		// width: '100%',
	},
}));

export default function EventForm(props) {
	const {event, setEvent} = useContext(EventContext); // Grab event object from context. Values set in EventPage.js
	const [leadAnalyst, setLeadAnalyst] = useState(''); //TODO: grab from context, not known by event
	const classes = useStyles();

	const fieldVariant = 'outlined';

	return (
		<div className={classes.root}>
			<div style={{ textAlign: "center" }}>
				<Typography variant="h4" style={{ display: "inline-block", padding: "0 0.3em 1em 0" }}>Event Information</Typography>
				<HelpOutlineRoundedIcon size="large" style={{ verticalAlign: "baseline" }} />
				{/* TODO: Add popup for help icon */}
				{/* TODO: Add link to manual when help icon is clicked */}
			</div>
			{/* <Button variant="light"><HelpOutlineRoundedIcon /></Button> */}

			<Grid container direction="row" justify="space-evenly" spacing={4}>
				{/* First column */}
				<Grid container item xs>
					<Grid container direction="column" justify="space-between" spacing={2}>
						<Grid item xs>
							{/* Event Name Text Field */}
							{/* <FormLabel >Name</FormLabel>
							<Form.Control type="text" placeholder="Event Name" value={event.name} onChange={e => setEvent({ ...event, name: e.target.value })} /> */}
							<TextField required fullWidth variant={fieldVariant} id="name" label="Event Name" value={event.name} onChange={e => setEvent({...event, name: e.target.value})} className={classes.textfield} />
						</Grid>
						<Grid item xs>
							{/* Description Text Field */}
							{/* <FormLabel >Description</FormLabel>
							<Form.Control as="textarea" rows="3" placeholder="Event Description" value={event.description} onChange={e => setEvent({ ...event, description: e.target.value })} /> */}
							<TextField required fullWidth multiline rows="4" rowsMax="6" variant={fieldVariant} id="desc" label="Description" value={event.description} onChange={e => setEvent({...event, description: e.target.value})} className={classes.textfield} />
						</Grid>
						<Grid item xs>
							{/* Version Text Field */}
							{/* <FormLabel >Version</FormLabel>
							<Form.Control type="textarea" placeholder="ex. 1.1.4" value={event.version} onChange={e => setEvent({ ...event, version: e.target.value })} /> */}
							<TextField required fullWidth variant={fieldVariant} id="version" label="Version" value={event.version} onChange={e => setEvent({...event, version: e.target.value})} className={classes.textfield} />
						</Grid>
					</Grid>
				</Grid>
				{/* Second column */}
				<Grid container item xs>
					<Grid container direction="column" justify="space-between" spacing={5}>
						<Grid item xs>
							{/* Organization Text Field */}
							{/* <FormLabel style={{ display: "block" }}>Organization</FormLabel>
							<Form.Control type="text" placeholder="Organization" value={event.organization} onChange={e => setEvent({ ...event, organization: e.target.value })} /> */}
							<TextField required fullWidth variant={fieldVariant} id="org" label="Organization" value={event.organization} onChange={e => setEvent({...event, organization: e.target.value})} className={classes.textfield} />
						</Grid>
						<Grid item xs>
							{/* Security Guide Text Field */}
							{/* <FormLabel style={{ display: "block" }}>Classification Title Guide</FormLabel>
							<Form.Control type="text" placeholder="Title Guide" value={event.securityGuide} onChange={e => setEvent({ ...event, securityGuide: e.target.value })} /> */}
							<TextField required fullWidth variant={fieldVariant} id="guide" label="Security Guide" value={event.securityGuide} onChange={e => setEvent({...event, securityGuide: e.target.value})} className={classes.textfield} />
						</Grid>
						<Grid item xs>
							{/* Customer Text Field */}
							{/* <FormLabel style={{ display: "block" }}>Customer</FormLabel>
							<Form.Control type="text" placeholder="Customer Name" value={event.customer} onChange={e => setEvent({ ...event, customer: e.target.value })} /> */}
							<TextField required fullWidth variant={fieldVariant} id="customer" label="Customer" value={event.customer} onChange={e => setEvent({...event, customer: e.target.value})} className={classes.textfield} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<Grid container direction="row" justify="center" style={{padding: '3em 0 2em 0'}}>
				<Grid item xs={2}></Grid>
				<Grid container item xs={8}>
					<Grid item xs={4}>
						{/* Type Selector */}
						<FormLabel style={{ display: 'block' }}>Event Type</FormLabel>
						<FormControl className={classes.formControl}>
							<Select
								labelId="select-outlined-label"
								id="select-outlined"
								value={event.type}
								onChange={e => setEvent({ ...event, type: e.target.value })}
								label=""
							>
								<MenuItem key={null} value={''}>None</MenuItem>
								{options.types.map((el, ind) => {
									return <MenuItem key={ind} value={el}>{el}</MenuItem>
								})}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={4}>
						{/* Assessment Date Picker */}
						<FormLabel>Assessment Date</FormLabel>
						<MuiPickersUtilsProvider utils={DateFnsUtils} >
							<KeyboardDatePicker
								disableToolbar
								variant="inline"
								format="MM/dd/yyyy"
								margin="normal"
								id="assess-date-picker"
								label=""
								value={(event != null && event.hasOwnProperty('assessed')) ? event.assessed : new Date()}
								onChange={date => setEvent({ ...event, assessed: date })}
								KeyboardButtonProps={{ 'aria-label': 'change date', }}
							/>
						</MuiPickersUtilsProvider>
					</Grid>
					<Grid item xs={4}>
						{/* Declassification Date Picker */}
						<FormLabel>Declassification Date</FormLabel>
						<MuiPickersUtilsProvider utils={DateFnsUtils} >
							<KeyboardDatePicker
								disableToolbar
								variant="inline"
								format="MM/dd/yyyy"
								margin="normal"
								id="declass-date-picker"
								label=""
								value={(event != null && event.hasOwnProperty('declassified')) ? event.declassified : new Date()}
								onChange={date => setEvent({ ...event, declassified: date })}
								KeyboardButtonProps={{ 'aria-label': 'change date', }}
							/>
						</MuiPickersUtilsProvider>
					</Grid>
				</Grid>
				<Grid item xs={2}></Grid>
			</Grid>

			<div style={{ padding: "3em 0 2em 0", textAlign: "center" }}>
				<Typography variant="h4" style={{ display: "inline-block", padding: "0.3em" }}>Team Information</Typography>
				<HelpOutlineRoundedIcon size="large" style={{ verticalAlign: "baseline" }} />
				{/* TODO: Add popup for help icon */}
				{/* TODO: Add link to manual when help icon is clicked */}
			</div>

			{/* TODO: if possible, add exchange list to manage team fields */}
			<Grid container direction="row">
				<Grid item xs={3} />
				<Grid container item direction="row" justify="center" xs={6}>
					<Grid item xs>
						{/* Lead Analyst Dropdown */}
						{/* <FormLabel style={{display: 'block'}}>Lead Analyst</FormLabel> */}
						<FormControl className={classes.formControl}>
							<InputLabel id="demo-simple-select-outlined-label">Lead Analyst</InputLabel>
							<Select
								autoWidth
								labelId="select-outlined-label"
								id="select-outlined"
								value={leadAnalyst}
								onChange={e => setLeadAnalyst(e.target.value)}
							>
								<MenuItem key={null} value={''}>None</MenuItem>
								{/* TODO: fetch options from database */}
								{options.analysts.map((el, ind) => {
									return <MenuItem key={ind} value={el}>{el}</MenuItem>
								})}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs>
						{/* Collaborators Multiselect */}
						{/* <FormLabel>Select Collaborators</FormLabel> */}
						<Multiselect options={options.analysts} label="Collaborators" withInitialsAvatar />
					</Grid>
				</Grid>
				<Grid item xs={6} />
			</Grid>
		</div>
	);
}
