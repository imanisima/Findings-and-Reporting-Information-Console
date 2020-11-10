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
	const analystsList = [
		{ id: 1, name: 'Erick Nevarez', role: 'Lead Analyst' },
		{ id: 2, name: 'Raquel Gonzales', role: 'Analyst' },
		{ id: 3, name: 'Imani Martin', role: 'Analyst' },
		{ id: 4, name: 'Marco Soto', role: 'Analyst' },
		{ id: 5, name: 'Ricardo Aguilar', role: 'Analyst' },
		{ id: 6, name: 'Jose Marquez', role: 'Analyst' }
	]

export default function FinalReportForm(props){
	//Build your functions here
	const [selectedAnalysts, setSelectedAnalysts] = useState([]);
	const [selectedFindings, setSelectedFindings] = useState([]);

	const handleAnalystSelect = function(selectedItems) {
        const analysts = [];
        for (let i=0; i<selectedItems.length; i++) {
			let analyst = analystsList.find(a => a.name === selectedItems[i].value)
            analysts.push(analyst);
		}
		console.log(analysts)
		setSelectedAnalysts(analysts);
		console.log(selectedAnalysts)
	}

	const handleFindingSelect = function(selectedItems) {
        const findings = [];
        for (let i=0; i<selectedItems.length; i++) {
			let finding = props.findingFormData.find(a => a.hostName === selectedItems[i].value)
            findings.push(finding);
		}
		console.log(findings)
		setSelectedFindings(findings);
		console.log(selectedFindings)
	}

	const generateDocument = async () => {
		const documentCreator = new FinalReportCreator();

		const blob = await fetch(
			logoUrl
		  ).then(r => r.blob());
		
		const doc = documentCreator.create(selectedAnalysts, blob, selectedFindings)

		Packer.toBlob(doc).then(blob => {
			console.log(blob)
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
							<Form.Control as="select" multiple onChange={e => handleAnalystSelect(e.target.selectedOptions)}>
								{analystsList.map(analyst => (
									<option key={analyst.id} value={analyst.name}>{analyst.name}</option>
								))}
							</Form.Control>
							<Form.Text muted> Hold CTRL or Command for multiple select</Form.Text>
						</Form.Group>
						<Form.Group controlId="FindingFormControl">
							<Form.Label>Finding(s) for the Event</Form.Label>
							<Form.Control as="select" multiple onChange={e => handleFindingSelect(e.target.selectedOptions)}>
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

const logoUrl = "data:image/png;base64,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"