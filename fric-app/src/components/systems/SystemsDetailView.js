import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from 'react-bootstrap/Tooltip'

export default function SystemDetailView(props) {

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
    
    const handleSaveClick = () => {
		const newSystem = {
			name: name,
			description: description,
			location: location,
			router: router,
			switchName: switchName,
			room: room,
            testPlan: testPlan,
            archived: false
		};
		console.log(newSystem);

		//TODO: send post request to save data

		props.closeDetailAction();
    };
    
    useEffect(() => {
		//TODO: fetch task object from db using id
		//TODO: set state values using fetched object fields
		console.log(props.selectedSystem);

		if (props.selectedSystem != null) {
            console.log(props.selectedSystem.SystemName);
            setName(props.selectedSystem.SystemName);
            console.log(name);
			setDescription(props.selectedSystem.SystemDescription);
			setLocation(props.selectedSystem.SystemLocation);
			setRouter(props.selectedSystem.SystemRouter);
			setSwitchName(props.selectedSystem.SystemSwitch);
            setRoom(props.selectedSystem.SystemRoom);
            setTestPlan(props.selectedSystem.testPlan);
        }
        
	}, [props.selectedSystem])

    return (
        (props.selectedSystem != null) ?
            <div>
                <h3>System Information</h3>
                <Form className='sys-info-form'>
                    <Form.Group as={Row} controlId="formHorizontalNameSys">
                        <Form.Label value={name} column sm={3}>
                        System Name
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control  placeholder="Name of System" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalDescSys">
                        <Form.Label defaultValue={description} column sm={3}>
                        System Description
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control  placeholder="Description of System" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalLocSys">
                        <Form.Label defaultValue={location} column sm={3}>
                        System Location
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control  placeholder="Location of System" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalRouterSys">
                        <Form.Label defaultValue={router} column sm={3}>
                        System Router
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control  placeholder="Router of System" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalSwitchSys">
                        <Form.Label defaultValue={switchName} column sm={3}>
                        System Switch
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control  placeholder="Switch of System" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalRoomSys">
                        <Form.Label defaultValue={room} column sm={3}>
                        System Room
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control  placeholder="Room of System" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalLongDescription">
                        <Form.Label defaultValue={testPlan} column sm={3}>
                        Test Plan
                        </Form.Label>
                        <Col lg={7}>
                        <Form.Control as="textarea" rows="4" placeholder="Test Plan for System" />
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
                    <Form.Row>
                        <Button variant="primary" type="submit">
                            Edit
                        </Button>
                        <Button variant="warning" type="submit">
                            Archive
                        </Button>
                        <Button variant="secondaray" type="submit">
                            Cancel
                        </Button>
                    </Form.Row>
                </Form>
            </div>
        :
            <div>
                <h3>System Information</h3>
                <Form className='sys-info-form'>
                    <Form.Group as={Row} controlId="formHorizontalNameSys">
                        <Form.Label column sm={3}>
                        System Name
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control  placeholder="Name of System" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalDescSys">
                        <Form.Label column sm={3}>
                        System Description
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control  placeholder="Description of System" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalLocSys">
                        <Form.Label column sm={3}>
                        System Location
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control  placeholder="Location of System" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalRouterSys">
                        <Form.Label column sm={3}>
                        System Router
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control  placeholder="Router of System" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalSwitchSys">
                        <Form.Label column sm={3}>
                        System Switch
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control  placeholder="Switch of System" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalRoomSys">
                        <Form.Label column sm={3}>
                        System Room
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control  placeholder="Room of System" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalLongDescription">
                        <Form.Label column sm={3}>
                        Test Plan
                        </Form.Label>
                        <Col lg={7}>
                        <Form.Control as="textarea" rows="4" placeholder="Test Plan for System" />
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
                    <Form.Row>
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                        <Button variant="warning" type="submit">
                            Archive
                        </Button>
                        <Button variant="secondaray" type="submit">
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