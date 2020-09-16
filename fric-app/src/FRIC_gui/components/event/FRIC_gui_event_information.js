import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

class EventInformation extends Component {
    render() {
        return (
            <div>
                <h3>Event Basic Information</h3>
                <Form className='event-info-form'>
                    <Form.Group as={Row} controlId="formHorizontalEventName">
                        <Form.Label column sm={2}>
                        Event Name
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Control  placeholder="Name of Event" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEventDesc">
                        <Form.Label column sm={2}>
                        Event Description
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Control  placeholder="Description of Event" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formGridEventType">
                        <Form.Label>Event Type</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEventVersion">
                        <Form.Label column sm={2}>
                        Event Version
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Control  placeholder="Version of Event" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalAssesmentDate">
                        <Form.Label column sm={2}>
                        Assesment Date
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Control  placeholder="Date Event was asses" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalOrganizationName">
                        <Form.Label column sm={2}>
                        Organization Name
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Control  placeholder="Organization of Event" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalSecurityClassification">
                        <Form.Label column sm={2}>
                            Security Classification Title Guide
                        </Form.Label>
                        <Col sm={2}>
                            <Form.Control placeholder="Security Classification of Event" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalSecuirityClassificationTitleGuide">
                        <Form.Label column sm={2}>
                            Security Classification  Title Guide
                        </Form.Label>
                        <Col sm={2}>
                            <Form.Control placeholder="Organization of Event" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formGridEventClassification">
                        <Form.Label>Event Classification</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalDeclassificationDate">
                        <Form.Label column sm={2}>
                            Declassification Date
                        </Form.Label>
                        <Col sm={2}>
                            <Form.Control placeholder="Declassification Date of Event" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalCustomerName">
                        <Form.Label column sm={2}>
                            Customer Name
                        </Form.Label>
                        <Col sm={2}>
                            <Form.Control placeholder="Name of Customer" />
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
export default EventInformation