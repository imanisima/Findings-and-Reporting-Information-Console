/*
 *
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Multiselect from '../general/Multiselect.js';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
// import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import 'date-fns';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function EventDetailView(props) {
	const [assessDate, setAssessDate] = useState(new Date('2014-08-18T21:11:54'));
	const [declassDate, setDeclassDate] = useState(new Date());
	const [eventType, setEventType] = useState();
	const [leadAnalyst, setLeadAnalyst] = useState();

	const classes = useStyles();

	const renderTooltip = (props) => (
		<Tooltip id="help-tooltip" {...props} >
			Helpful tooltip goes here...
		</Tooltip>
	);

	return (
		<Paper style={{ maxWidth: "25em", padding: "2.3em", overflowY: "scroll" }}>
			<Form>
				<div style={{ textAlign: "center" }}>
					<h4 style={{ display: "inline-block", padding: "0.3em" }}>Event Information</h4>
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
					<Form.Label style={{ display: "block" }}>Name</Form.Label>
					<Form.Control type="text" placeholder="Title" />
				</Form.Group>

				{/* Description Text Field */}
				<Form.Group>
					<Form.Label style={{ display: "block" }}>Description</Form.Label>
					<Form.Control as="textarea" rows="3" placeholder="Description" />
				</Form.Group>

				{/* Type Selector */}
				<Form.Group>
					<Form.Label style={{ display: "block" }}>Event Type</Form.Label>
					<FormControl className={classes.formControl}>
						<Select
							labelId="select-outlined-label"
							id="select-outlined"
							value={eventType}
							onChange={val => { setEventType(val) }}
							label=""
						>
							{props.options.types.map((el) => {
								return <MenuItem value={el}>{el}</MenuItem>
							})}
						</Select>
					</FormControl>
				</Form.Group>

				{/* Version Text Field */}
				<Form.Group>
					<Form.Label style={{ display: "block" }}>Version</Form.Label>
					<Form.Control type="text" placeholder="ex. 1.1.4" />
				</Form.Group>

				{/* Assessment Date Picker */}
				<Form.Group>
					<Form.Label style={{ display: "block" }}>Assessment Date</Form.Label>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							format="MM/dd/yyyy"
							margin="normal"
							id="assess-date-picker"
							label=""
							value={assessDate}
							onChange={date => { setAssessDate(date) }}
							KeyboardButtonProps={{ 'aria-label': 'change date', }}
						/>
					</MuiPickersUtilsProvider>
				</Form.Group>

				{/* Organization Text Field */}
				<Form.Group>
					<Form.Label style={{ display: "block" }}>Organization</Form.Label>
					<Form.Control type="text" placeholder="Organization" />
				</Form.Group>

				{/* Organization Text Field */}
				<Form.Group>
					<Form.Label style={{ display: "block" }}>Classification Title Guide</Form.Label>
					<Form.Control type="text" placeholder="Title Guide" />
				</Form.Group>

				{/* Declassification Date Picker */}
				<Form.Group>
					<Form.Label style={{ display: "block" }}>Declassification Date</Form.Label>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							format="MM/dd/yyyy"
							margin="normal"
							id="declass-date-picker"
							label=""
							value={declassDate}
							onChange={date => { setDeclassDate(date) }}
							KeyboardButtonProps={{ 'aria-label': 'change date', }}
						/>
					</MuiPickersUtilsProvider>
				</Form.Group>

				{/* Customer Text Field */}
				<Form.Group>
					<Form.Label style={{ display: "block" }}>Customer</Form.Label>
					<Form.Control type="text" placeholder="Customer Name" />
				</Form.Group>

				<div style={{ textAlign: "center" }}>
					<h4 style={{ display: "inline-block", padding: "0.3em" }}>Team Information</h4>
					<OverlayTrigger
						placement="bottom"
						delay={{ show: 320, hide: 200 }}
						overlay={renderTooltip}
					>
						<HelpOutlineRoundedIcon size="large" style={{ verticalAlign: "middle" }} />
					</OverlayTrigger>
				</div>

				{/* Lead Analyst Dropdown */}
				<Form.Group>
					<Form.Label style={{ display: "block" }}>Lead Analysts</Form.Label>
					<FormControl className={classes.formControl}>
						<Select
							labelId="select-outlined-label"
							id="select-outlined"
							value={leadAnalyst}
							onChange={val => { setLeadAnalyst(val) }}
							label=""
						>
							{props.options.analysts.map((el) => {
								return <MenuItem value={el}>{el}</MenuItem>
							})}
						</Select>
					</FormControl>
				</Form.Group>

				{/* Collaborators Multiselect */}
				<Form.Group style={{ display: "inline-block" }}>
					<Form.Label style={{ display: "block" }}>Select Collaborators</Form.Label>
					<Multiselect options={props.options.analysts}  />
				</Form.Group>
				
				<Form.Group>
					<Button variant="contained" startIcon={<SaveIcon />} style={{ backgroundColor: "#ffc108", color: "white", margin: "0.5em", }}>Save</Button>
					<Button variant="contained" startIcon={<CancelIcon />} style={{ backgroundColor: "#dc3545", color: "white", margin: "0.5em", }}>Cancel</Button>
				</Form.Group>
			</Form>
		</Paper>
	);
}

EventDetailView.propTypes = {
	selectedEvent: PropTypes.object.isRequired,
	options: PropTypes.object.isRequired,
}