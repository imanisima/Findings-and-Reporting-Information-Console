import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import { BiHelpCircle } from 'react-icons/bi';
import '../../css/findings/FRIC_gui_findings_details.css';
import { Col } from 'react-bootstrap';

class FindingsExtras extends Component {
    render() {
      return (
        <div>
        <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Threat Relevance </h3>
          <Form> 
            <Form.Group as={Col} controlId="formGridRelevance">
                <Form.Label>Relevance</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Control>
            </Form.Group>
            <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Counter Measure </h3>
            <Form.Group as={Col} controlId="formGridEffect">
                <Form.Label>Effectiveness Rating</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Control>
            </Form.Group>
            <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Impact </h3>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridImpactDesc">
                    <Form.Label column sm={3}>Impact Description</Form.Label>
                    <Col lg={12}>
                        <Form.Control as="textarea" rows="4" placeholder=" Long Description" />
                    </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridImpactLvl">
                    <Form.Label>Impact Level</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Severity </h3>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridStatus">
                    <Form.Label>Severity Category Score</Form.Label>
                    <Form.Control  placeholder="Severity Category Score" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridType">
                    <Form.Label>Vulnerability Severity</Form.Label>
                    <Form.Control  placeholder="Vulnerability Severity" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridClassification">
                    <Form.Label>Quantitative Vulnerability Severity.</Form.Label>
                    <Form.Control  placeholder="Quantitative Vulnerability Severity" />
                </Form.Group>
            </Form.Row>
            <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Risk </h3>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridStatus">
                    <Form.Label>Risk</Form.Label>
                    <Form.Control  placeholder="Risk" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridType">
                    <Form.Label>Likelihood</Form.Label>
                    <Form.Control  placeholder="Likelihood" />
                </Form.Group>
            </Form.Row>
          </Form>
        </div>
      );
    }
}

export default FindingsExtras