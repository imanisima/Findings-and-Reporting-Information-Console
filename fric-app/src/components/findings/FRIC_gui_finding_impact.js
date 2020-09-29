import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import { BiHelpCircle } from 'react-icons/bi';
import '../../css/findings/FRIC_gui_findings_details.css';
import {Col} from 'react-bootstrap';

class FindingsImpact extends Component {
    render() {
      return (
        <div>
        <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Findings Impact </h3>
          <Form>
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
}

export default FindingsImpact