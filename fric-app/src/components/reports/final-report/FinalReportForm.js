import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Form from 'react-bootstrap/Form';
import styles from '../../../css/subtasks/NewSubtaskDialog.module.css'

import { FinalReportCreator } from './FinalReportCreator'
import { saveAs } from "file-saver";
import { Packer } from "docx";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

/**
 * Test Cases
 */
	const analysts = [
		{ id: 1, name: 'analyst1' },
		{ id: 2, name: 'analyst2' },
		{ id: 3, name: 'analyst3' },
		{ id: 4, name: 'analyst4' },
		{ id: 5, name: 'analyst5' },
	]

export default function FinalReportForm(props){
	//Build your functions here
	const [selectedAnalysts, setSelectedAnalysts] = useState([]);

	const handleSelect = function(selectedItems) {
        const analysts = [];
        for (let i=0; i<selectedItems.length; i++) {
            analysts.push(selectedItems[i].value);
		}
		console.log(analysts)
		setSelectedAnalysts(analysts);
		console.log(selectedAnalysts)
	}

	const generateDocument = () => {
		const documentCreator = new FinalReportCreator();
		const doc = documentCreator.create()

		Packer.toBlob(doc).then(blob => {
			saveAs(blob, "final-report.docx");
			console.log("Document created successfully");
		});
	}
	
    const handleSubmit = () => {
		generateDocument();
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
					<Form>
						<Form.Group controlId="AnalystForm">
							<Form.Label>Analyst(s) in the Event</Form.Label>
							<Form.Control as="select" multiple onChange={e => handleSelect(e.target.selectedOptions)}>
								{analysts.map(analyst => (
									<option key={analyst.id} value={analyst.name}>{analyst.name}</option>
								))}
							</Form.Control>
							<Form.Text muted> Hold CTRL or Command for multiple select</Form.Text>
						</Form.Group>
						<Form.Group controlId="FindingFormControl">
							<Form.Label>Finding(s) for the Event</Form.Label>
							<Form.Control as="select" multiple onChange={e => handleSelect(e.target.selectedOptions)}>
								{props.findingFormData.map(finding => (
									<option key={finding.id} value={finding.hostName}>{finding.hostName}</option>
								))}
							</Form.Control>
							<Form.Text muted> Hold CTRL or Command for multiple select</Form.Text>
						</Form.Group>
					</Form>
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
	findingFormData: PropTypes.array
}