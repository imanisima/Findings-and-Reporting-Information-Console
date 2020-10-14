/**
 * 
 */

import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import styles from '../../css/tasks/NewTaskDialog.module.css';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewTaskDialog(props) {
	
	const handleClose = () => {
		props.closeDialogAction();
	};

	return (
		<Dialog
			open={props.isOpen}
			TransitionComponent={Transition}
			scroll="body"
			keepMounted
			onClose={handleClose}
			aria-labelledby="slide-dialog-title"
			aria-describedby="slide-dialog-description"
		>
			<DialogTitle id="scroll-dialog-title" className={styles.title}>Create New Task</DialogTitle>
			<DialogContent dividers={true}>
				{ props.children }
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} variant="contained" color="primary">Submit</Button>
				<Button onClick={handleClose} variant="contained" color="secondary">Cancel</Button>
			</DialogActions>
		</Dialog>
	);
}

NewTaskDialog.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	closeDialogAction: PropTypes.func.isRequired,
}
