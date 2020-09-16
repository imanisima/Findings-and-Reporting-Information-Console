import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

class EventTeamInformation extends Component {
    render() {
        return (
            <div>
                <h3>Event Team Basic Information</h3>

                <Form className='event-team-info-form'>
                    <Form.Group as={Row} controlId="formHorizontalLeadAnalyst">
                        <Form.Label column sm={2}>
                        Lead Analyst
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Control  placeholder="Name of Event" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formGridManage">
                        <Form.Label>Manage</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Remove</option>
                            <option>Edit</option>
                            <option>Sync</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalAnalystInitial">
                        <Form.Label column sm={2}>
                        Analyst initial
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Control  placeholder="Initial of analyst" />
                        </Col>
                    </Form.Group>

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
export default EventTeamInformation