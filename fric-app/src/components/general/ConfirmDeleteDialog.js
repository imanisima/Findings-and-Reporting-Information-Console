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
import Typography from '@material-ui/core/Typography';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmDeleteDialog(props) {
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
			<DialogTitle id="scroll-dialog-title" style={{ textAlign: "center" }}>Delete {props.objectType}(s)</DialogTitle>
			<DialogContent dividers={true}>
				<Typography variant="subtitle1">Are you sure you want to delete {(props.numSelected != null && props.numSelected > 1) ? props.numSelected + ` ${props.objectType}s` : ` this ${props.objectType}`}?</Typography>
			</DialogContent>
			<DialogActions>
				<Button onClick={props.confirmAction} variant="contained" size="large" color="primary">Confirm</Button>
				<Button onClick={props.closeDialogAction} variant="contained" size="large" color="secondary">Cancel</Button>
			</DialogActions>
		</Dialog>
	);
}

ConfirmDeleteDialog.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	numSelected: PropTypes.number.isRequired,
	confirmAction: PropTypes.func.isRequired,
	closeDialogAction: PropTypes.func.isRequired,
	objectType: PropTypes.string.isRequired,
}
