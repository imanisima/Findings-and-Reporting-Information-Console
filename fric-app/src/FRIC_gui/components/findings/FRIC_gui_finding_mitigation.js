import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import { BiHelpCircle } from 'react-icons/bi';
import '../../css/findings/FRIC_gui_findings_details.css';
import {Row, Col} from 'react-bootstrap';

class FindingsMitigation extends Component {
    render() {
      return (
        <div>
        <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Mitigation </h3>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalBriefDescription">
                <Form.Label column sm={2}>
                Brief Description
                </Form.Label>
                <Col sm={5}>
                <Form.Control placeholder="Description" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalMitigationLongDescription">
                <Form.Label column sm={2}>
                Long Description
                </Form.Label>
                <Col lg={5}>
                <Form.Control as="textarea" rows="4" placeholder=" Long Description" />
                </Col>
            </Form.Group>
          </Form>
        </div>
      );
    }
}

export default FindingsMitigation