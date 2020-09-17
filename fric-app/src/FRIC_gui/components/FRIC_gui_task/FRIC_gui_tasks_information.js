import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import { BiHelpCircle } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';
import '../../css/tasks/FRIC_gui_tasks_information.css';

class TasksInformation extends Component {

    // form submission
    mySubmitHandler = (event) => {
        event.preventDefault();
        window.location.href = '/main'
        window.open(window.location.href)
      }

    render() {
      return (
        <div>
            <h3><BiHelpCircle size={24} onClick={() => console.log("help clicked")} /> Tasks Information </h3>
            <p> Create a new task here!</p>

            <Form onSubmit={this.mySubmitHandler}>
                <Form.Group as={Row} controlId="formHorizontalID">
                    <Form.Label column sm={2}>
                    Title:
                    </Form.Label>
                    <Col sm={2}>
                    <Form.Control  placeholder="Check Errors" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalHost">
                    <Form.Label column sm={2}>
                    Due Date:
                    </Form.Label>
                    <Col sm={2}>
                    <Form.Control placeholder="09/30/2020" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalDescription">
                    <Form.Label column sm={2}>
                    Description:
                    </Form.Label>
                    <Col sm={2}>
                    <Form.Control placeholder="Description" />
                    </Col>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridStatus">
                        <Form.Label>Priority:</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Low</option>
                            <option>Moderate</option>
                            <option>High</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridType">
                        <Form.Label>System:</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Wells Fargo ATM</option>
                            <option>Wells Fargo Switch #5</option>
                            <option>ATM</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridClassification">
                        <Form.Label>Assigned To:</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>J.L.</option>
                            <option>B.R.</option>
                            <option>E.R.</option>
                            <option>H.M.</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.File 
                    id="supplement-file"
                    label="Supplementary Data"
                    custom>
                </Form.File>
                
                <Button type="submit" className="submit_btn" variant="primary" onClick ={this.handleClick}>Submit</Button>
                <Button type="submit" className="cancel_btn" variant="danger" onClick ={this.handleClick}>Cancel</Button>
            </Form>
        </div>
      );
    }
}

export default TasksInformation