/**
 * 
 */

import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function ArchiveTaskDialog(props) {

	const handleSubmit = () => { // Send update request to set archived field to true
		axios.put('http://localhost:5000/tasks/archive', {
			params: {
				_id: props.tasks
			}
		})
			.then(res => {
				console.log(res);
				props.reload();
				props.closeDialogAction();
			})
			.catch(err => {
				//TODO: display error message
				console.log(err);
			});
	};

	return (
		<Dialog
			open={props.isOpen}
			TransitionComponent={Transition}
			keepMounted
			disableBackdropClick
			onClose={props.closeDetailAction}
			aria-labelledby="slide-dialog-title"
			aria-describedby="slide-dialog-description"
		>
			<DialogTitle id="scroll-dialog-title" style={{textAlign: "center"}}>Archive Task(s)</DialogTitle>
			<DialogContent dividers={true}>
				<Typography variant="subtitle1">Are you sure you want to archive {(props.tasks != null && props.tasks.length > 1) ? props.tasks.length + ' tasks?' : 'this task?'}</Typography>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleSubmit} variant="contained" size="large" color="primary">Confirm</Button>
				<Button onClick={props.closeDialogAction} variant="contained" size="large" color="secondary">Cancel</Button>
			</DialogActions>
		</Dialog>
	);
}

ArchiveTaskDialog.propTypes = {
	tasks: PropTypes.array.isRequired,
	isOpen: PropTypes.bool.isRequired,
	closeDialogAction: PropTypes.func.isRequired,
	reload: PropTypes.func.isRequired,
}
