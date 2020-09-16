import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import { BiHelpCircle } from 'react-icons/bi';
import {Row, Col} from 'react-bootstrap';

class FindingsInformation extends Component {
    render() {
      return (
        <div>
            <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Findings Information </h3>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalID">
                    <Form.Label column sm={2}>
                    ID
                    </Form.Label>
                    <Col sm={2}>
                    <Form.Control  placeholder="Finding ID" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalHost">
                    <Form.Label column sm={2}>
                    Host Name
                    </Form.Label>
                    <Col sm={2}>
                    <Form.Control placeholder="Host Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalIP">
                    <Form.Label column sm={2}>
                    IP Port
                    </Form.Label>
                    <Col sm={2}>
                    <Form.Control placeholder="IP Port" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalDescription">
                    <Form.Label column sm={2}>
                    Description
                    </Form.Label>
                    <Col sm={2}>
                    <Form.Control placeholder="Description" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalLongDescription">
                    <Form.Label column sm={2}>
                    Long Description
                    </Form.Label>
                    <Col lg={2}>
                    <Form.Control as="textarea" rows="4" placeholder="Long Description" />
                    </Col>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridType">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridClassification">
                        <Form.Label>Classification</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
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
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    OR
                    <Form.Group as={Col} controlId="formGridType">
                        <Form.Label>Task</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    OR
                    <Form.Group as={Col} controlId="formGridClassification">
                        <Form.Label>Subtask</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
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
            </Form>
        </div>
      );
    }
}

export default FindingsInformation
