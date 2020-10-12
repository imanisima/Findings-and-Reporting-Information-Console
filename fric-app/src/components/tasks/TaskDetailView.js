/*
 *
 */

import React, { useState, useEffect, useContext, useMemo } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded'
import Form from 'react-bootstrap/Form'

import Spinner from '../general/Spinner';
import TaskForm from './TaskForm';
import { TaskContext } from './TaskContext';
import { DetailViewActionContext } from '../general/LayoutTemplate';

export default function TaskDetailView(props) {
	const closeDetailAction = useContext(DetailViewActionContext);
	const [contentIsLoading, setContentIsLoading] = useState(true);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [progress, setProgress] = useState('');
	const [priority, setPriority] = useState('');
	const [relatedTasks, setRelatedTasks] = useState([]);
	const [analysts, setAnalysts] = useState([]);
	const [collabs, setCollabs] = useState([]);
	const [dueDate, setDueDate] = useState(new Date());
	const [attachment, setAttachment] = useState('');
	const [archived, setArchived] = useState(false);
	const taskProviderValue = useMemo(() => ({
		name, setName,
		description, setDescription,
		progress, setProgress,
		priority, setPriority,
		relatedTasks, setRelatedTasks,
		analysts, setAnalysts,
		collabs, setCollabs,
		attachment, setAttachment,
		dueDate, setDueDate,
		archived, setArchived
	}), [name, description, progress, priority, relatedTasks,
		analysts, collabs, attachment, dueDate, archived]);
	
	const handleSaveClick = () => {
		axios.put("http://localhost:5000/tasks/update", {
			params: {
				id: (props.selectedTask != null && props.selectedTask.length === 1) ? props.selectedTask[0] : '',
				name: name,
				description: description,
				progress: progress,
				priority: priority,
				associations: relatedTasks,
				analysts: analysts,
				collaborators: collabs,
				dueDate: dueDate.toUTCString(), // Must be converted to value that can be sent in request body
				attachment: attachment,
				archived: archived, // New elements will never be archived
			}
		})
			.then(res => {
				console.log(res);
				setContentIsLoading(true); // Reset to spinner for next edit request
				props.reload(); // Reload table content
				closeDetailAction(); // Close detail view tray
			})
			.catch(err => {
				console.log(err);
				//TODO: display error message
			})
	};

	const handleCancelClick = () => {
		closeDetailAction();
		setContentIsLoading(true);
	}

	useEffect(() => {
		setContentIsLoading(true);

		if (props.selectedTask != null && props.selectedTask.length === 1) {
			axios.get('http://localhost:5000/tasks', {
				params: {
					id: props.selectedTask[0]
				}
			})
				.then(res => {
					console.log(res.data);
					//TODO: validate request data before setting values
					setName(res.data.name);
					setDescription(res.data.description);
					setDueDate(new Date(res.data.dueDate));
					setPriority(res.data.priority);
					setProgress(res.data.progress);
					setAnalysts(res.data.analysts);
					setCollabs(res.data.collaborators);
					setRelatedTasks(res.data.associations);
					setContentIsLoading(false);
				})
				.catch(err => {
					console.log(err);
					//TODO: display error message
					setContentIsLoading(false);
				})
		}
	}, [props.selectedTask]);

	return (
		<>
			{
				(contentIsLoading) ? <Spinner /> : (
					<>
						<div style={{ textAlign: "center" }}>
							<h4 style={{ display: "inline-block", padding: "0.3em" }}>Task Detail View</h4>
							<HelpOutlineRoundedIcon size="large" style={{ verticalAlign: "middle" }} />
						</div>
						{/* <Button variant="light"><HelpOutlineRoundedIcon /></Button> */}

						<TaskContext.Provider value={taskProviderValue}>
							<TaskForm />
						</TaskContext.Provider>

						{/* Action Buttons */}
						<Form.Group>
							<Button
								onClick={handleSaveClick}
								variant="contained"
								size="large"
								startIcon={<SaveIcon />}
								style={{ backgroundColor: "#ffc108", color: "charcoal", margin: "0.5em", }}
							>Save</Button>
							<Button
								onClick={handleCancelClick}
								variant="contained"
								size="large"
								startIcon={<CancelIcon />}
								style={{ backgroundColor: "#dc3545", color: "white", margin: "0.5em", }}
							>Cancel</Button>
						</Form.Group>
					</>
				)
			}
		</>
	);
}

TaskDetailView.propTypes = {
	selectedTask: PropTypes.array.isRequired,
	reload: PropTypes.func.isRequired,
}