import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import styles from '../../../css/subtasks/NewSubtaskDialog.module.css'

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function FinalReportForm(props){
    //Build your functions here

    const handleSubmit = () => {
        props.closeDialogAction();
    }

    const handleClose = () => {
        props.closeDialogAction();
    }
    
    return (
        <Dialog
			open={props.isOpen}
			TransitionComponent={Transition}
			scroll="body"
            keepMounted
            fullWidth={true}
			maxWidth={'md'}
			disableBackdropClick
			onClose={handleClose}
			aria-labelledby="slide-dialog-title"
			aria-describedby="slide-dialog-description"
		>
			<DialogTitle id="scroll-dialog-title" className={styles.title}>Final Report Form</DialogTitle>
			<DialogContent dividers={true}>
                    {/*Build your UI form in here*/}
                    <h2>Final Report Form</h2>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleSubmit} variant="contained" size="large" color="primary">Submit</Button>
				<Button onClick={handleClose} variant="contained" size="large" color="secondary">Cancel</Button>
			</DialogActions>
		</Dialog>
    )
}

FinalReportForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeDialogAction: PropTypes.func.isRequired,
}