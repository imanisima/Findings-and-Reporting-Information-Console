/**
 * 
 */

import axios from 'axios';
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

export default function ConfigurationDetailView() {
	const closeDetailAction = useContext(DetailViewActionContext);
	const [contentIsLoading, setContentIsLoading] = useState(false);
	const [value, setValue] = useState('');
	const [description, setDescription] = useState('');
	const configProviderValue = useMemo(() => ({
		value, setValue,
		description, setDescription,
	}), [value, description]);

	const fetchConfiguration = () => {
		axios.get('http://localhost:5000/configure', {
			params: {
				type: '', //TODO: pass in bound value
				value: '', //TODO: pass in bound value
			}
		})
			.then(res => {
				console.log(res);
				//TODO: handle request
			})
			.catch(err => {
				console.log(err);
				//TODO: display error message
			})
	};

	useLayoutEffect(() => fetchConfiguration(), []);

	const handleSaveClick = async () => {
		// if (selected.length !== 1) return;

		await axios.put('http://localhost:5000/configure/update', {
			params: {
				type: '', //TODO: pass in bound value
				values: '', //TODO: pass in bound value
			}
		})
			.then(res => {
				console.log(res);
				//TODO: handle request
			})
			.catch(err => {
				console.log(err);
				//TODO: display error message
			})
	};

	const handleCancelClick = () => {
		closeDetailAction();
		setContentIsLoading(true);
	};

	return (
		<>
			{
				(contentIsLoading) ? <Spinner /> : (
					<div className={styles.detailContainer}>
						<Typography variant="h4" className={styles.title}>Edit Configuration</Typography>

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
