import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import { BiHelpCircle } from 'react-icons/bi';
import '../../css/findings/FRIC_gui_findings_details.css';
import {Col} from 'react-bootstrap';

class FindingsAnalyst extends Component {
    render() {
      return (
        <div>
        <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Analyst Information </h3>
          <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.AnalystForm">
                    <Form.Label>Analyst</Form.Label>
                    <Form.Control as="select" multiple>
                    <option>Analyst 1</option>
                    <option>Analyst 2</option>
                    <option>Analyst 3</option>
                    <option>Analyst 4</option>
                    <option>Analyst 5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="exampleForm.CollabForm">
                    <Form.Label>Collaborator(s)</Form.Label>
                    <Form.Control as="select" multiple>
                    <option>Collaborator 1</option>
                    <option>Collaborator 2</option>
                    <option>Collaborator 3</option>
                    <option>Collaborator 4</option>
                    <option>Collaborator 5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPosture">
                    <Form.Label>Posture</Form.Label>
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

export default FindingsAnalyst