import React, { useState, useEffect, useContext, Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import styles from '../../../css/subtasks/NewSubtaskDialog.module.css'




import FinalRiskMatrixCreator from './FinalRiskMatrixCreator';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});


export default function RiskMatrixForm(props){
    //Build your functions here
	
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
			<DialogTitle id="scroll-dialog-title" className={styles.title}>Risk Matrix Form</DialogTitle>
			<DialogContent dividers={true}>
                    {/*Build your UI form in here*/}
                    <h2>Risk Matrix Form Preview</h2>
			</DialogContent>
			<DialogActions>
				<Button href="final_risk_matrix_creator" variant="contained" size="large" color="primary">Go to</Button>
				<Button onClick={handleClose} variant="contained" size="large" color="secondary">Cancel</Button>
			</DialogActions>
		</Dialog>
    )
}


RiskMatrixForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeDialogAction: PropTypes.func.isRequired,
}