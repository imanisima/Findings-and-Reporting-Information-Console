import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

class SystemDetailView extends Component {
    render() {
        return (
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
}
export default SystemDetailView