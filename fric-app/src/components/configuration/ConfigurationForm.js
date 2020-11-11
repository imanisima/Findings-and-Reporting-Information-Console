/**
 * 
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { ConfigurationContext } from './ConfigurationContext';

export default function ConfigurationForm(props) {
	// const {value, setValue, description, setDescription} = useContext(ConfigurationContext); //TODO: handle empty context

	return (
		<div>
			{/* <Typography variant="h4">
				{ props.title }
			</Typography> */}

			{/* Value Field */}
			{/* <TextField
				placeholder="Value"
				variant="default"
				value={value}
				onChange={e => setValue(e.target.value)}
			/> */}

			{/* Description field */}
			{/* <TextField
				placeholder="Description"
				variant="outlined"
				value={description}
				onChange={e => setDescription(e.target.value)}
			/> */}
		</div>
	)
}

ConfigurationForm.propTypes = { title: PropTypes.string.isRequired, }
