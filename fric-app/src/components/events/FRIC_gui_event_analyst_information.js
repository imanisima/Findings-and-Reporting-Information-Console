import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

class EventAnalystInformation extends Component {
    render() {
        return (
            <div>
                <h3>Analyst Information</h3>
                <Form className='event-analyst-info-form'>
                    <Form.Group as={Row} controlId="formHorizontalEventName">
                        <Form.Label column sm={2}>
                        First Name
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Control  placeholder="First Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEventDesc">
                        <Form.Label column sm={2}>
                        Last Name
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Control  placeholder="Last Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEventVersion">
                        <Form.Label column sm={2}>
                        Initials
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Control  placeholder="XX" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalAssesmentDate">
                        <Form.Label column sm={2}>
                        Title
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Control  placeholder="Analyst" />
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
export default EventAnalystInformation