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
import ReactTooltip from 'react-tooltip';

// import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';

import { FindingContext } from './FindingContext';

import Multiselect from '../general/Multiselect.js';
import FileBrowseField from '../general/FileBrowseField';

import { options } from '../general/test/subtaskstestdata'; //TODO: remove once selector options are fetched from database
import { 
    FindingClassification, 
    FindingType, 
    FindingStatus, 
    FindingImpactConfidentiality,
    FindingImpactAvailability,
    FindingImpactIntegrity,
    AnalystPosture,
    ThreatRelevance,
    EffectivenessRating,
    ImpactLevel
  } from '../../shared/EnumeratedTypes';
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

		
	} = useContext(FindingContext); //TODO: error handle nonexistent context values

	useEffect(() => {
		//TODO: fetch multiselector options
	}, []);

    console.log(props.systemArray)
	return (
		<div>
            <h3><BiHelpCircle data-tip data-for="infoTip" size={24} onMouseOver onClick={() => console.log("help clicked")} /> Findings Information </h3>
            <ReactTooltip id="infoTip" place="top" effect="solid">Test tooltip</ReactTooltip>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalID">
                    <Form.Label column sm={2}>
                    ID
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control readOnly value={id} placeholder="Finding ID" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalHost">
                    <Form.Label column sm={2}>
                    Host Name
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control value={hostName} placeholder="Host Name" onChange={e => setHostName(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalIP">
                    <Form.Label column sm={2}>
                    IP Port
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control value={ipPort} placeholder="IP Port" onChange={e => setIpPort(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalDescription">
                    <Form.Label column sm={2}>
                    Description
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control value={findingDescription} placeholder="Description" onChange={e => setFindingDescription(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalLongDescription">
                    <Form.Label column sm={2}>
                    Long Description
                    </Form.Label>
                    <Col lg={5}>
                    <Form.Control as="textarea" rows="4" value={longFindingDescription} placeholder="Long Description" onChange={e => setLongFindingDescription(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select" value={status} onChange={e => setStatus(e.target.value)}>
                            {Object.values(FindingStatus).map((el, ind) => {
                                return <option key={ind} value={el}>{el}</option>
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridType">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" value={type} onChange={e => setType(e.target.value)}>
                            {Object.values(FindingType).map((el, ind) => {
                                return <option key={ind} value={el}>{el}</option>
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridClassification">
                        <Form.Label>Classification</Form.Label>
                        <Form.Control as="select" value={classification} onChange={e => setClassification(e.target.value)}>
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
                        <Form.Control as="select" value={system} onChange={e => setSystem(e.target.value)}>
                            {props.systemArray.map(system => (
                                <option key={system.id} value={system.name}>{system.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    OR
                    <Form.Group as={Col} controlId="formGridType">
                        <Form.Label>Task</Form.Label>
                        <Form.Control as="select" value={task} onChange={e => setTask(e.target.value)}>
                            {props.taskArray.map(task => (
                                <option key={task.id} value={task.name}>{task.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    OR
                    <Form.Group as={Col} controlId="formGridClassification">
                        <Form.Label>Subtask</Form.Label>
                        <Form.Control as="select" value={subtask} onChange={e => setSubTask(e.target.value)}>
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
                        <Form.Control as="select" value={confidentiality} onChange={e => setConfidentiality(e.target.value)}>
                            {Object.values(FindingImpactConfidentiality).map((el, ind) => {
                                return <option key={ind} value={el}>{el}</option>
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridIntegrity">
                        <Form.Label>Integrity</Form.Label>
                        <Form.Control as="select" value={integrity} onChange={e => setIntegrity(e.target.value)}>
                            {Object.values(FindingImpactIntegrity).map((el, ind) => {
                                return <option key={ind} value={el}>{el}</option>
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridAvailability">
                        <Form.Label>Availability</Form.Label>
                        <Form.Control as="select" value={availability} onChange={e => setAvailability(e.target.value)}>
                            {Object.values(FindingImpactAvailability).map((el, ind) => {
                                return <option key={ind} value={el}>{el}</option>
                            })}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Analyst Information </h3>
                <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.AnalystForm">
                        <Form.Label>Analyst</Form.Label>
                        <Form.Control as="select" multiple value={analyst} onChange={e => setAnalyst(e.target.value)}>
                        <option>Analyst 1</option>
                        <option>Analyst 2</option>
                        <option>Analyst 3</option>
                        <option>Analyst 4</option>
                        <option>Analyst 5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="exampleForm.CollabForm">
                        <Form.Label>Collaborator(s)</Form.Label>
                        <Form.Control as="select" multiple value={collaborators} onChange={e => setCollaborators(e.target.value)}>
                        <option>Collaborator 1</option>
                        <option>Collaborator 2</option>
                        <option>Collaborator 3</option>
                        <option>Collaborator 4</option>
                        <option>Collaborator 5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPosture">
                        <Form.Label>Posture</Form.Label>
                        <Form.Control as="select" value={posture} onChange={e => setPosture(e.target.value)}>
                            {Object.values(AnalystPosture).map((el, ind) => {
                                return <option key={ind} value={el}>{el}</option>
                            })}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Mitigation </h3>
                <Form.Group as={Row} controlId="formHorizontalBriefDescription">
                    <Form.Label column sm={2}>
                    Brief Description
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control placeholder="Description"value={briefDescription} onChange={e => setBriefDescription(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalMitigationLongDescription">
                    <Form.Label column sm={2}>
                    Long Description
                    </Form.Label>
                    <Col lg={5}>
                    <Form.Control as="textarea" rows="4" placeholder=" Long Description" value={mitigationLongDescription} onChange={e => setMitigationLongDescription(e.target.value)}/>
                    </Col>
                </Form.Group>
                <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Threat Relevance </h3>
                <Form.Group as={Col} controlId="formGridRelevance">
                    <Form.Label>Relevance</Form.Label>
                    <Form.Control as="select" value={relevance} onChange={e => setRelevance(e.target.value)}>
                        {Object.values(ThreatRelevance).map((el, ind) => {
                                return <option key={ind} value={el}>{el}</option>
                        })}
                    </Form.Control>
                </Form.Group>
                <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Counter Measure </h3>
                <Form.Group as={Col} controlId="formGridEffect">
                    <Form.Label>Effectiveness Rating</Form.Label>
                    <Form.Control as="select" value={effectiveness} onChange={e => setEffectiveness(e.target.value)}>
                        {Object.values(EffectivenessRating).map((el, ind) => {
                                return <option key={ind} value={el}>{el}</option>
                        })}
                    </Form.Control>
                </Form.Group>
                <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Impact </h3>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridImpactDesc">
                        <Form.Label>Impact Description</Form.Label>
                        <Col lg={12}>
                            <Form.Control as="textarea" rows="4" placeholder=" Long Description" value={impactDescription} onChange={e => setImpactDescription(e.target.value)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridImpactLvl">
                        <Form.Label>Impact Level</Form.Label>
                        <Form.Control as="select" value={impactLevel} onChange={e => setImpactLevel(e.target.value)}>
                            {Object.values(ImpactLevel).map((el, ind) => {
                                    return <option key={ind} value={el}>{el}</option>
                            })}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Severity </h3>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridStatus">
                        <Form.Label>Severity Category Score</Form.Label>
                        <Form.Control readOnly placeholder="Severity Category Score" value={severityCatScore}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridType">
                        <Form.Label>Vulnerability Severity</Form.Label>
                        <Form.Control readOnly placeholder="Vulnerability Severity" value={vulnerabilitySeverity}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridClassification">
                        <Form.Label>Quantitative Vulnerability Severity.</Form.Label>
                        <Form.Control readOnly placeholder="Quantitative Vulnerability Severity" value={quantitativeSeverity} />
                    </Form.Group>
                </Form.Row>
                <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Risk </h3>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridStatus">
                        <Form.Label>Risk</Form.Label>
                        <Form.Control readOnly placeholder="Risk" value={risk}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridType">
                        <Form.Label>Likelihood</Form.Label>
                        <Form.Control readOnly placeholder="Likelihood" value={likelihood}/>
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