/**
 * 
 */

import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import ConfigurationForm from './ConfigurationForm';

import { DetailViewActionContext } from '../general/LayoutTemplate';
import Spinner from '../general/Spinner';

export default function ConfigurationDetailView() {
	const closeDetailAction = useContext(DetailViewActionContext);
	const [contentIsLoading, setContentIsLoading] = useState(true);

	const handleSaveClick = () => {
		//TODO: Save updated configuration values
	};

	const handleCancelClick = () => closeDetailAction();

	return (
		<>
			{
				(contentIsLoading) ? <Spinner /> : (
					<>
						<ConfigurationForm title={''} /> //TODO: bind to passed title value
						<Button
							startIcon={<SaveIcon />}
							variant="contained"
							size="large"
							color="primary"
							onClick={handleSaveClick}
						>
							Save
						</Button>
						<Button
							startIcon={<CancelIcon />}
							variant="contained"
							size="large"
							color="secondary"
							onClick={handleCancelClick}
						>
							Cancel
						</Button>
					</>
				)
			}
		</>
	);
}
