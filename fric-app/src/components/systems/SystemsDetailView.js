import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from 'react-bootstrap/Tooltip'
import axios from 'axios';
import Spinner from '../general/Spinner';
import '../../css/systems/SystemDetailView.css'

export default function SystemDetailView(props) {

    const [contentIsLoading, setContentIsLoading] = useState(true);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [location, setLocation] = useState('');
	const [router, setRouter] = useState('');
	const [switchName, setSwitchName] = useState('');
	const [room, setRoom] = useState('');
	const [testPlan, setTestPlan] = useState('');

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));

    const classes = useStyles();

    const renderTooltip = (props) => (
		<Tooltip id="help-tooltip" {...props} >
			Helpful tooltip goes here...
		</Tooltip>
    );

    const handleArchiveClick = () => {
        console.log("Archive clicked")
        axios.put('http://localhost:5000/systems/update', {
                params: {
                    id: props.selectedSystem,
                    name: name,
                    description: description,
                    location: location,
                    router: router,
                    switch: switchName,
                    room: room,
                    testPlan: testPlan,
                    archived: true
                }
            })
                .then(res => {
                    setContentIsLoading(true);
                    console.log(res);
                    props.closeDetailAction();
                })
                .catch(err => {
                    console.log(err);
                })
    }

    const handleSaveClick =  () => {
        if (props.selectedSystem != null) {
            console.log(router)
            axios.put('http://localhost:5000/systems/update', {
                params: {
                    id: props.selectedSystem,
                    name: name,
                    description: description,
                    location: location,
                    router: router,
                    switch: switchName,
                    room: room,
                    testPlan: testPlan,
                    archived: false
                }
            })
                .then(res => {
                    setContentIsLoading(true);
                    console.log(res);
                    props.closeDetailAction();
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else {
            const newSystem = {
                name: name,
                description: description,
                location: location,
                router: router,
                switch: switchName,
                room: room,
                testPlan: testPlan,
                archived: false
            };
            console.log(newSystem);
            
            axios.post('http://localhost:5000/systems/add', newSystem)
                        .then(response => {
                            console.log(response.data);
                            window.location = '/systems'
                        })
                        .catch(error => console.log(error));
        }
    };

    
    useEffect(() => {
		//TODO: fetch task object from db using id
        //TODO: set state values using fetched object fields
		console.log(props.selectedSystem);

		if (props.selectedSystem != null) {

            axios.get('http://localhost:5000/systems', {
                params: {
                    id: props.selectedSystem
                }
            })
                .then(res => {
                    setName(res.data.name);
                    setDescription(res.data.description);
                    setLocation(res.data.location);
                    setRouter(res.data.router);
                    setSwitchName(res.data.switch);
                    setRoom(res.data.room);
                    setTestPlan(res.data.testPlan);
                    setContentIsLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setContentIsLoading(false);
				})
        }
        setContentIsLoading(false)
	}, [props.selectedSystem])

    return (
        (contentIsLoading) ? <Spinner /> :
            <div>
                <h3>System Information</h3>
                <Form className='sys-info-form'>
                    <Form.Group as={Row} controlId="formHorizontalNameSys">
                        <Form.Label column sm={3}>
                        System Name
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control value={name} placeholder="Name of System" onChange={ e => setName(e.target.value) } />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalDescSys">
                        <Form.Label defaultValue={description} column sm={3}>
                        System Description
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control value={description} placeholder="Description of System" onChange={ e => setDescription(e.target.value) } />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalLocSys">
                        <Form.Label column sm={3}>
                        System Location
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control value={location}  placeholder="Location of System" onChange={ e => setLocation(e.target.value) } />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalRouterSys">
                        <Form.Label column sm={3}>
                        System Router
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control value={router}  placeholder="Router of System" onChange={ e => { setRouter(e.target.value)} }/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalSwitchSys">
                        <Form.Label column sm={3}>
                        System Switch
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control value={switchName}  placeholder="Switch of System" onChange={ e => setSwitchName(e.target.value) } />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalRoomSys">
                        <Form.Label defaultValue={room} column sm={3}>
                        System Room
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control value={room} placeholder="Room of System" onChange={ e => setRoom(e.target.value) } />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalLongDescription">
                        <Form.Label column sm={3}>
                        Test Plan
                        </Form.Label>
                        <Col lg={7}>
                        <Form.Control value={testPlan} as="textarea" rows="4" placeholder="Test Plan for System" onChange={ e => setTestPlan(e.target.value) } />
                        </Col>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridConfidentiality">
                            <Form.Label>Confidentiality</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridIntegrity">
                            <Form.Label>Integrity</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridAvailability">
                            <Form.Label>Availability</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Button variant="primary" onClick={handleSaveClick}>
                            Edit
                        </Button>
                        <Button variant="warning" onClick={handleArchiveClick} >
                            Archive
                        </Button>
                        <Button variant="secondaray" onClick={props.closeDetailAction} >
                            Cancel
                        </Button>
                    </Form.Row>
                </Form>
            </div>
    )
}

SystemDetailView.propTypes = {
    selectedSystem: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired,
    closeDetailAction: PropTypes.func
}