import axios from 'axios';
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import FindingForm from './FindingForm';
import { FindingContext } from './FindingContext';
import styles from '../../css/subtasks/NewSubtaskDialog.module.css';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewFindingDialog(props) {
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

	/*const handleSubmit = () => {
		axios.post('http://localhost:5000/subtasks/new', {
			params: {
				name: name,
				description: description,
				progress: progress,
				ownerTask: ownerTask,
				associations: relatedSubtasks,
				analysts: analysts,
				collaborations: collabs,
				dueDate: dueDate,
				archived: false,
			}
		})
			.then(res => {
				console.log(res);
				props.reload();
				handleClose();
			})
			.catch(err => {
				//TODO: display error message
				console.log(err);
			});
	};
    */
	const handleClose = () => {
		// Reset values so they aren't displayed when dialog is shown again
		setName('');
		setDescription('');
		setProgress('');
		setOwnerTask('');
		setRelatedSubtasks([]);
		setAnalysts([]);
		setCollabs([]);
		setDueDate(new Date());
		setArchived(false);
		props.closeDialogAction(); // Close the dialog window
	}; 

	return (
		<Dialog
			open={props.isOpen}
			TransitionComponent={Transition}
			scroll="body"
            keepMounted
            fullWidth={true}
			maxWidth={'md'}
			disableBackdropClick
			//onClose={handleClose}
			aria-labelledby="slide-dialog-title"
			aria-describedby="slide-dialog-description"
		>
			<DialogTitle id="scroll-dialog-title" className={styles.title}>Create New Finding</DialogTitle>
			<DialogContent dividers={true}>
				<FindingContext.Provider value={subtaskProviderValue}>
					<FindingForm 
						systemArray={props.systemArray}
						taskArray={props.taskArray}
						subtaskArray={props.subtaskArray}
					/>
				</FindingContext.Provider>
			</DialogContent>
			<DialogActions>
				<Button variant="contained" size="large" color="primary">Submit</Button>
				<Button variant="contained" size="large" color="secondary">Cancel</Button>
			</DialogActions>
		</Dialog>
	);
}

NewFindingDialog.propTypes = {
	findingArray: PropTypes.object,
	taskArray: PropTypes.array,
	subtaskArray: PropTypes.array,
	systemArray: PropTypes.array,
	isOpen: PropTypes.bool.isRequired,
	closeDialogAction: PropTypes.func.isRequired,
	reload: PropTypes.func.isRequired,
}
