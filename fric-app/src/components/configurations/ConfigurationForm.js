/**
 * 
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { ConfigurationContext } from './ConfigurationContext';

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
}));

export default function ConfigurationForm(props) {
	const classes = useStyles();
	const {
		value, setValue,
		description, setDescription,
	} = useContext(ConfigurationContext); //TODO: handle empty context

	return (
		<form className={classes.formContainer}>
			<div className={classes.formSection}>
				<FormLabel className={classes.formLabel}>Configuration Value</FormLabel>
				<TextField
					required
					fullWidth
					variant="outlined"
					placeholder="Value"
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
			</div>
			
			<div className={classes.formSection}>
				<FormLabel className={classes.formLabel}>Description</FormLabel>
				<TextField
					required
					fullWidth
					variant="outlined"
					multiline
					rows="4"
					rowsMax="4"
					placeholder="Description"
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
			</div>
		</form>
	)
}
