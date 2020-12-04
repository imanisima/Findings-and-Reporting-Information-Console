/**
 * 
 */

import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useLayoutEffect, useState, useContext, useMemo } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import ConfigurationForm from './ConfigurationForm';

import { DetailViewActionContext } from '../general/LayoutTemplate';
import { ConfigurationContext } from './ConfigurationContext';
import Spinner from '../general/Spinner';
import styles from '../../css/configurations/ConfigurationDetailView.module.css';

export default function ConfigurationDetailView(props) {
	const closeDetailAction = useContext(DetailViewActionContext);
	const [contentIsLoading, setContentIsLoading] = useState(false);
	const [configId, setConfigId] = useState('');
	const [value, setValue] = useState('');
	const [description, setDescription] = useState('');
	const configProviderValue = useMemo(() => ({
		value, setValue,
		description, setDescription,
	}), [value, description]);

	const fetchConfiguration = () => {
		setContentIsLoading(true);

		if (props.selected == null || props.type == null) throw new Error('No configuration value passed to ConfigurationDetailView component.');
		else if (props.type == null) throw new Error('No configuration type passed to ConfigurationDetailView component.')

		axios.get('http://localhost:5000/configure', {
			params: {
				type: props.type,
				id: props.selected,
			}
		})
			.then(res => {
				setConfigId(res.data._id);
				setValue(res.data.value);
				setDescription(res.data.description);
				setContentIsLoading(false);
			})
			.catch(err => {
				console.log(err);
				//TODO: display error message
				setContentIsLoading(false);
			});
	};

	useLayoutEffect(() => fetchConfiguration(), []);

	const handleSaveClick = async () => {
		if (!configId || configId === '') throw new Error('Invalid configuration _id value.');
		if (value == null) throw new Error('Null ConfigurationDetailView input value.'); //TODO: change to dynamic input validation

		console.log(configId);
		await axios.post('http://localhost:5000/configure/update', {
			params: {
				id: configId,
				value: value,
				description: description,
			}
		})
			.then(res => {
				console.log(res);
				//TODO: handle request
				props.reload();
				handleCancelClick(); // Close detail view
			})
			.catch(err => {
				console.log(err);
				//TODO: display error message
				// handleCancelClick();
			});
	};

	const handleCancelClick = () => {
		// Reset input values
		setConfigId('');
		setValue('');
		setDescription('');

		closeDetailAction();
		setContentIsLoading(true);
	};

	return (
		<>
			{
				(contentIsLoading) ? <Spinner /> : (
					<div className={styles.detailContainer}>
						<Typography variant="h4" className={styles.title}>Edit {props.type} Configuration</Typography>

						<div>
							<ConfigurationContext.Provider value={configProviderValue}>
								<ConfigurationForm /> {/* TODO: bind to passed title value */}
							</ConfigurationContext.Provider>
						</div>
						
						<div className={styles.buttonContainer}>
							<Button
								startIcon={<SaveIcon />}
								variant="contained"
								size="large"
								color="primary"
								onClick={handleSaveClick}
								style={{ margin: '1em' }}
							>Save
							</Button>
							<Button
								startIcon={<CancelIcon />}
								variant="contained"
								size="large"
								color="secondary"
								onClick={handleCancelClick}
								style={{ margin: '1em' }}
							>Cancel
							</Button>
						</div>
					</div>
				)
			}
		</>
	);
}

ConfigurationDetailView.propTypes = {
	selected: PropTypes.string,
	type: PropTypes.string,
	reload: PropTypes.func,
}
