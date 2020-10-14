/**
 * This component contains the form that is embedded in the SetupModal.
 * 
 * Created by Marco Soto
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../css/sync/SyncForm.module.css';
import Form from 'react-bootstrap/Form'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		textAlign: "center",
		alignContent: "center",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function SyncForm(props) {
	const classes = useStyles();
	const [syncMethod, setSyncMethod] = useState('analyst');
	const [showAnalystSelect, setShowAnalystSelect] = useState(true);
	const [selectedAnalyst, setSelectedAnalyst] = useState('');
	const [address, setAddress] = useState(null);

	const handleRadioChange = (event) => {
		setSyncMethod(event.target.value);
		setShowAnalystSelect(!showAnalystSelect);
	};

	const handleSync = () => {
		props.syncAction();
		switch (syncMethod) {
			case 'analyst':
				break;
			case 'address':
				console.log(address)
				break;
			default: throw Error;
		}
		props.closeAction();
	}

	return (
		<>
			<DialogContent id="syncFormContent" className={styles.syncFormContent}>
				<Typography variant="h4" className={styles.title}>
					Sync Event
				</Typography>
				
				<Form.Group style={{marginLeft: "1em", marginRight: "1em",}}>
				{/* Radio buttons */}
				<Typography variant="subtitle1">
					Select Sync Method
				</Typography>
				<FormControl component="fieldset">
					<RadioGroup aria-label="sync-method" name="sync-method" value={syncMethod} onChange={handleRadioChange}>
						<FormControlLabel value="analyst" control={<Radio color="primary" />} label="With Analyst" />
						<FormControlLabel value="address" control={<Radio color="primary" />} label="By IP Address" />
					</RadioGroup>
				</FormControl>

				{
					// Reactive radio section
					(showAnalystSelect) ? (				
						// Enter analyst name
						<Form.Group controlId="analyst">
							<Typography variant="subtitle1" className={styles.subtitle}>
								Select Analyst
							</Typography>
							<FormControl className={classes.formControl}>
								<InputLabel id="analyst-select-label">Analyst</InputLabel>
								<Select
									labelId="analyst-select"
									id="analyst-select"
									value={selectedAnalyst}
									onChange={e => setSelectedAnalyst(e.target.value)}
									label="Analyst"
								>
									<MenuItem value=""><em>None</em></MenuItem>
									{
										props.analystOptions.map(el => {
											return (
												<MenuItem value={el}>{el}</MenuItem>
											)
										})
									}
								</Select>
							</FormControl>
						</Form.Group>
					) : (
						// Enter ip address
						<Form.Group controlId="address">
							<FormLabel className={styles.subtitles}>Enter IP Address</FormLabel>
							<Form.Control
								type="text"
								placeholder="ex. 1.0.0.1"
								onChange={e => setAddress(e.target.value)}
								minlength="7"
								maxlength="15"
								size="15"
								pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
							/>
						</Form.Group>
					)
				}
				</Form.Group>

				{/* Submit Button */}
				<Form.Group className={styles.center}>
					<Button onClick={handleSync} variant="contained" size="large" color="primary" className={styles.buttons}>Sync</Button>
					<span style={{margin:"0.5em"}}/> {/* Button spacer */}
					<Button onClick={props.closeAction} variant="contained" size="large" color="secondary" className={styles.buttons}>Cancel</Button>
				</Form.Group>
			</DialogContent>
		</>
	);
}

SyncForm.propTypes = {
	syncAction: PropTypes.func.isRequired,
	closeAction: PropTypes.func.isRequired,
	analystOptions: PropTypes.array.isRequired,
}
