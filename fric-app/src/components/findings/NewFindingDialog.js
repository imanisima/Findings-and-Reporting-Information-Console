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
	const [id, setID] = useState('');
    const [hostName, setHostName] = useState('');
    const [ipPort, setIpPort] = useState('');
    const [findingDescription, setFindingDescription] = useState('');
    const [longFindingDescription, setLongFindingDescription] = useState('');
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');
    const [classification, setClassification] = useState('');
    const [evidence, setEvidence] = useState('');
    const [system, setSystem] = useState('');
    const [task, setTask] = useState('');
    const [subtask, setSubTask] = useState('');
    const [relatedFindings, setRelatedFindings] = useState([]);
    const [confidentiality, setConfidentiality] = useState('');
    const [integrity, setIntegrity] = useState('');
    const [availability, setAvailability] = useState('');
    const [analyst, setAnalyst] = useState([]);
    const [collaborators, setCollaborators] = useState([]);
    const [posture, setPosture] = useState(''); //Not in classes
    const [briefDescription, setBriefDescription] = useState('');
    const [mitigationLongDescription, setMitigationLongDescription] = useState('');
    const [relevance, setRelevance] = useState(''); //Not in classes
    const [effectiveness, setEffectiveness] = useState(''); //Not in classes
    const [impactDescription, setImpactDescription] = useState('');
    const [impactLevel, setImpactLevel] = useState('');
    const [severityCatScore, setSeverityCatScore] = useState('');
    const [vulnerabilitySeverity, setVulnerabilitySeverity] = useState('');
    const [quantitativeSeverity, setQuantitativeSeverity] = useState('');
    const [risk, setRisk] = useState('');
    const [likelihood, setLikelihood] = useState('');
	const findingProviderValue = useMemo(() => ({
		id, setID,
		hostName, setHostName,
		ipPort, setIpPort,
		findingDescription, setFindingDescription,
		longFindingDescription, setLongFindingDescription,
        status, setStatus,
        type, setType,
		classification, setClassification,
		evidence, setEvidence,
		system, setSystem, 
        task, setTask,
        subtask, setSubTask,
        relatedFindings, setRelatedFindings,
        confidentiality, setConfidentiality,
        integrity, setIntegrity,
        availability, setAvailability,
        analyst, setAnalyst,
        collaborators, setCollaborators,
        posture, setPosture, //Not in classes
        briefDescription, setBriefDescription,
        mitigationLongDescription, setMitigationLongDescription,
        relevance, setRelevance, //Not in classes
        effectiveness, setEffectiveness, //Not in classes
        impactDescription, setImpactDescription,
        impactLevel, setImpactLevel,
        severityCatScore, setSeverityCatScore,
        vulnerabilitySeverity, setVulnerabilitySeverity,
        quantitativeSeverity, setQuantitativeSeverity,
        risk, setRisk,
        likelihood, setLikelihood
    }), [id, hostName, ipPort, findingDescription, longFindingDescription,
        status, type, classification, evidence, system, 
        task, subtask, relatedFindings, confidentiality, integrity, 
        availability, analyst, collaborators, posture, briefDescription,
        mitigationLongDescription, relevance, effectiveness, impactDescription,impactLevel,
        severityCatScore, vulnerabilitySeverity, quantitativeSeverity, risk, likelihood]);

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
			onClose={handleClose}
			aria-labelledby="slide-dialog-title"
			aria-describedby="slide-dialog-description"
		>
			<DialogTitle id="scroll-dialog-title" className={styles.title}>Create New Finding</DialogTitle>
			<DialogContent dividers={true}>
				<FindingContext.Provider value={findingProviderValue}>
					<FindingForm 
						systemArray={props.systemArray}
						taskArray={props.taskArray}
						subtaskArray={props.subtaskArray}
					/>
				</FindingContext.Provider>
			</DialogContent>
			<DialogActions>
				<Button variant="contained" size="large" color="primary">Submit</Button>
				<Button onClick={handleClose} variant="contained" size="large" color="secondary">Cancel</Button>
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
