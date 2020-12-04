import React, {useEffect, useContext} from 'react';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { makeStyles } from '@material-ui/core/styles';
import { BiHelpCircle } from 'react-icons/bi';
import { SystemContext } from './SystemContext';

import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
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
export default function SystemForm(props) {
    const classes = useStyles();
    const {
        name, setName,
		description, setDescription,
		location, setLocation,
        router, setRouter,
        switchName, setSwitchName,
		room, setRoom,
		testPlan, setTestPlan, 
        archived, setArchived
	} = useContext(SystemContext); //TODO: error handle nonexistent context values

	useEffect(() => {
		//TODO: fetch multiselector options
	}, []);
        return (
            <div>
                <h3><BiHelpCircle data-tip data-for="infoTip" size={24} onMouseOver onClick={() => console.log("help clicked")} /> Systems Information </h3>
                <ReactTooltip id="infoTip" place="top" effect="solid">Test tooltip</ReactTooltip>
                <Form className='sys-info-form'>
                    <Form.Group as={Row} controlId="formHorizontalNameSys">
                        <Form.Label column sm={2}>
                        System Name
                        </Form.Label>
                        <Col sm={5}>
                        <Form.Control value={name} placeholder="Name of System" onChange={e => setName(e.target.value)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalDescSys">
                        <Form.Label column sm={2}>
                        System Description
                        </Form.Label>
                        <Col sm={5}>
                        <Form.Control as="textarea" rows="4" value={description} placeholder="Description of System" onChange={e => setDescription(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalLocSys">
                        <Form.Label column sm={2}>
                        System Location
                        </Form.Label>
                        <Col sm={5}>
                        <Form.Control value={location} placeholder="Location of System" onChange={e => setLocation(e.target.value)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalRouterSys">
                        <Form.Label column sm={2}>
                        System Router
                        </Form.Label>
                        <Col sm={5}>
                        <Form.Control value={router}  placeholder="Router of System" onChange={e => setRouter(e.target.value)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalSwitchSys">
                        <Form.Label column sm={2}>
                        System Switch
                        </Form.Label>
                        <Col sm={5}>
                        <Form.Control  value={switchName} placeholder="Switch of System" onChange={e => setSwitchName(e.target.value)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalRoomSys">
                        <Form.Label column sm={2}>
                        System Room
                        </Form.Label>
                        <Col sm={5}>
                        <Form.Control value={room}  placeholder="Room of System" onChange={e => setRoom(e.target.value)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalRoomSys">
                        <Form.Label column sm={2}>
                        Test Plan
                        </Form.Label>
                        <Col sm={5}>
                        <Form.Control value={testPlan}  placeholder="Test Plan of System" onChange={e => setTestPlan(e.target.value)}/>
                        </Col>
                    </Form.Group>
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
                    
                </Form>
            </div>
        );
    }
SystemForm.propTypes = {
    findingArray: PropTypes.array,
}