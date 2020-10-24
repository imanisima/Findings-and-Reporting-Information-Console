import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Form from 'react-bootstrap/Form';
import { BiHelpCircle } from 'react-icons/bi';
import {Row, Col} from 'react-bootstrap';
// import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';

import { FindingContext } from './FindingContext';

import Multiselect from '../general/Multiselect.js';
import FileBrowseField from '../general/FileBrowseField';

import { options } from '../general/test/subtaskstestdata'; //TODO: remove once selector options are fetched from database
import { FindingClassification, FindingType, FindingStatus } from '../../shared/EnumeratedTypes';
const useStyles = makeStyles((theme) => ({
	formContainer: {
		padding: "0em 1em 0em 1em",
	},
	formSection: {
		padding: "1em 0 1em 0",
	},
	formLabel: {
		display: "block",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	inline: {
		display: "inline-block",
	},
}));

export default function FindingForm(props) {
	const classes = useStyles();
	const {
		name, setName,
		description, setDescription,
		progress, setProgress,
		ownerTask, setOwnerTask,
		relatedSubtasks, setRelatedSubtasks,
		analysts, setAnalysts,
		collabs, setCollabs,
		attachment, setAttachment, //TODO: Add file attachment field to form
		dueDate, setDueDate,
		/* archived, setArchived */ //TODO: Add archived checkbox to form
	} = useContext(FindingContext); //TODO: error handle nonexistent context values

	useEffect(() => {
		//TODO: fetch multiselector options
	}, []);

    console.log(props.systemArray)
	return (
		<div>
            <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Findings Information </h3>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalID">
                    <Form.Label column sm={2}>
                    ID
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control  placeholder="Finding ID" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalHost">
                    <Form.Label column sm={2}>
                    Host Name
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control placeholder="Host Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalIP">
                    <Form.Label column sm={2}>
                    IP Port
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control placeholder="IP Port" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalDescription">
                    <Form.Label column sm={2}>
                    Description
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control placeholder="Description" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalLongDescription">
                    <Form.Label column sm={2}>
                    Long Description
                    </Form.Label>
                    <Col lg={5}>
                    <Form.Control as="textarea" rows="4" placeholder="Long Description" />
                    </Col>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            {Object.values(FindingStatus).map((el, ind) => {
                                return <option key={ind} value={el}>{el}</option>
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridType">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            {Object.values(FindingType).map((el, ind) => {
                                return <option key={ind} value={el}>{el}</option>
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridClassification">
                        <Form.Label>Classification</Form.Label>
                        <Form.Control as="select" >
                            {Object.values(FindingClassification).map((el, ind) => {
                                return <option key={ind} value={el}>{el}</option>
                            })}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.File 
                    id="evidence-file"
                    label="Evidence"
                    custom>
                </Form.File>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridStatus">
                        <Form.Label>System</Form.Label>
                        <Form.Control as="select">
                            {props.systemArray.map(system => (
                                <option key={system.id} value={system.name}>{system.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    OR
                    <Form.Group as={Col} controlId="formGridType">
                        <Form.Label>Task</Form.Label>
                        <Form.Control as="select">
                            {props.taskArray.map(task => (
                                <option key={task.id} value={task.name}>{task.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    OR
                    <Form.Group as={Col} controlId="formGridClassification">
                        <Form.Label>Subtask</Form.Label>
                        <Form.Control as="select">
                            {props.subtaskArray.map(subtask => (
                                <option key={subtask.id} value={subtask.name}>{subtask.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Related Finding(s)</Form.Label>
                    <Form.Control as="select" multiple>
                    <option>Finding 1</option>
                    <option>Finding 2</option>
                    <option>Finding 3</option>
                    <option>Finding 4</option>
                    <option>Finding 5</option>
                    </Form.Control>
                </Form.Group>
                <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Findings Impact </h3>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridConfidentiality">
                        <Form.Label>Confidentiality</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridIntegrity">
                        <Form.Label>Integrity</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridAvailability">
                        <Form.Label>Availability</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Analyst Information </h3>
                <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.AnalystForm">
                        <Form.Label>Analyst</Form.Label>
                        <Form.Control as="select" multiple>
                        <option>Analyst 1</option>
                        <option>Analyst 2</option>
                        <option>Analyst 3</option>
                        <option>Analyst 4</option>
                        <option>Analyst 5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="exampleForm.CollabForm">
                        <Form.Label>Collaborator(s)</Form.Label>
                        <Form.Control as="select" multiple>
                        <option>Collaborator 1</option>
                        <option>Collaborator 2</option>
                        <option>Collaborator 3</option>
                        <option>Collaborator 4</option>
                        <option>Collaborator 5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPosture">
                        <Form.Label>Posture</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Mitigation </h3>
                <Form.Group as={Row} controlId="formHorizontalBriefDescription">
                    <Form.Label column sm={2}>
                    Brief Description
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control placeholder="Description" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalMitigationLongDescription">
                    <Form.Label column sm={2}>
                    Long Description
                    </Form.Label>
                    <Col lg={5}>
                    <Form.Control as="textarea" rows="4" placeholder=" Long Description" />
                    </Col>
                </Form.Group>
                <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Threat Relevance </h3>
                <Form.Group as={Col} controlId="formGridRelevance">
                    <Form.Label>Relevance</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>
                <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Counter Measure </h3>
                <Form.Group as={Col} controlId="formGridEffect">
                    <Form.Label>Effectiveness Rating</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                    <   option>...</option>
                    </Form.Control>
                </Form.Group>
                <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Impact </h3>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridImpactDesc">
                        <Form.Label>Impact Description</Form.Label>
                        <Col lg={12}>
                            <Form.Control as="textarea" rows="4" placeholder=" Long Description" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridImpactLvl">
                        <Form.Label>Impact Level</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Severity </h3>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridStatus">
                        <Form.Label>Severity Category Score</Form.Label>
                        <Form.Control  placeholder="Severity Category Score" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridType">
                        <Form.Label>Vulnerability Severity</Form.Label>
                        <Form.Control  placeholder="Vulnerability Severity" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridClassification">
                        <Form.Label>Quantitative Vulnerability Severity.</Form.Label>
                        <Form.Control  placeholder="Quantitative Vulnerability Severity" />
                    </Form.Group>
                </Form.Row>
                <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Risk </h3>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridStatus">
                        <Form.Label>Risk</Form.Label>
                        <Form.Control  placeholder="Risk" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridType">
                        <Form.Label>Likelihood</Form.Label>
                        <Form.Control  placeholder="Likelihood" />
                    </Form.Group>
                </Form.Row> 
          </Form>
        </div>
	);
}

FindingForm.propTypes = {
    taskArray: PropTypes.array,
	subtaskArray: PropTypes.array,
	systemArray: PropTypes.array,
}