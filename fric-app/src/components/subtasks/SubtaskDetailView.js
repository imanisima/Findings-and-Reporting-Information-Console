/*
 *
 */

import axios from 'axios';
import 'date-fns';
import React, { useState, useEffect, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
// import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';

import { DetailViewActionContext } from '../general/LayoutTemplate';
import { SubtaskContext } from './SubtaskContext';
import SubtaskForm from './SubtaskForm';
import Spinner from '../general/Spinner';

export default function SubtaskDetailView(props) {
	const closeDetailAction = useContext(DetailViewActionContext);
	const [contentIsLoading, setContentIsLoading] = useState(true);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [progress, setProgress] = useState('');
	const [ownerTask, setOwnerTask] = useState('');
	const [relatedSubtasks, setRelatedSubtasks] = useState([]);
	const [analysts, setAnalysts] = useState([]);
	const [collabs, setCollabs] = useState([]);
	const [attachment, setAttachment] = useState('');
	const [dueDate, setDueDate] = useState(new Date());
	const [archived, setArchived] = useState(false);
	const subtaskProviderValue = useMemo(() => ({
		name, setName,
		description, setDescription,
		progress, setProgress,
		ownerTask, setOwnerTask,
		relatedSubtasks, setRelatedSubtasks,
		analysts, setAnalysts,
		collabs, setCollabs,
		attachment, setAttachment,
		dueDate, setDueDate,
		archived, setArchived
	}), [name, description, progress, ownerTask, relatedSubtasks,
		analysts, collabs, attachment, dueDate, archived]);

	const handleSaveClick = () => {
		//TODO: Handle subtasks input validation before sending request
		//TODO: Send update subtask request to database
		axios.put('http://localhost:5000/subtasks/update', {
			params: {
				id: (props.selectedTask != null && props.selectedTask.length === 1) ? props.selectedTask[0] : '',
				name: name,
				description: description,
				progress: progress,
				ownerTask: ownerTask,
				associations: relatedSubtasks,
				analysts: analysts,
				collaborators: collabs,
				dueDate: dueDate.toUTCString(), // Must be converted to value that can be sent in request body
				attachment: attachment,
				archived: archived, // New elements will never be archived
			}
		})
			.then(res => {
				console.log(res);
				props.reload();
				closeDetailAction();
				setContentIsLoading(true);
			})
			.catch(err => {
				console.log(err);
				//TODO: display error message
			})
		closeDetailAction(); // Close detail view tray
	}

	useEffect(() => {
		console.log(props.selectedSubtask);
		setContentIsLoading(true);

		axios.get('http://localhost:5000/subtasks', {
			params: {
				id: (props.selectedSubtask != null && props.selectedSubtask.length === 1) ? props.selectedSubtask[0] : ''
			}
		})
			.then(res => {
				console.log(res.data);
				//TODO: validate request data before setting values
				setName(res.data.name);
				setDescription(res.data.description);
				setDueDate(new Date(res.data.dueDate));
				setProgress(res.data.progress);
				setOwnerTask(res.data.ownerTask);
				setRelatedSubtasks(res.data.associations);
				setAnalysts(res.data.analysts);
				setCollabs(res.data.collaborators);
				setArchived(false);
				setContentIsLoading(false); // Show spinner
			})
			.catch(err => {
				console.log(err);
				//TODO: display error message
				setContentIsLoading(false);
			})
	}, [props.selectedSubtask]);

	return (
		(contentIsLoading) ? <Spinner /> : (
			<>
				<div style={{ textAlign: "center"}}>
					<h4 style={{ display: "inline-block", padding: "0.3em"}}>Subtask Detail View</h4>
					<HelpOutlineRoundedIcon size="large" style={{verticalAlign: "baseline"}}/>
				</div>
				
				<SubtaskContext.Provider value={subtaskProviderValue}>
					<SubtaskForm />
				</SubtaskContext.Provider>

				<div>
					<Button
						onClick={handleSaveClick}
						variant="contained"
						size="large"
						startIcon={<SaveIcon />}
						color="primary"
					>Save</Button>
					<Button
						onClick={closeDetailAction}
						variant="contained"
						size="large"
						startIcon={<CancelIcon />}
						color="secondary"
					>Cancel</Button>
				</div>
			</>
		)
	);
}

SubtaskDetailView.propTypes = {
	selectedSubtask: PropTypes.array.isRequired,
	reload: PropTypes.func.isRequired,
}
