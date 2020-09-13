import React, {Component} from 'react';
import {Accordion, InputGroup, FormControl, Card, Button} from 'react-bootstrap';

class Accordian extends Component{
  render(){

    return (
      <Accordion>

        {/* card 1 */}
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Task 1
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup.Prepend>
            <FormControl aria-label="Text input with checkbox" />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup.Prepend>
            <FormControl aria-label="Text input with checkbox" />
          </InputGroup>


          </Card.Body>
        </Accordion.Collapse>
      </Card>

      {/* card 2 */}
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Task 2
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              </InputGroup.Prepend>
              <FormControl aria-label="Text input with checkbox" />
            </InputGroup>

            <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup.Prepend>
            <FormControl aria-label="Text input with checkbox" />
          </InputGroup>

          </Card.Body>
        </Accordion.Collapse>
      </Card>

      {/* card 3 */}
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            Task 3
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              </InputGroup.Prepend>
              <FormControl aria-label="Text input with checkbox" />
            </InputGroup>

            <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup.Prepend>
            <FormControl aria-label="Text input with checkbox" />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup.Prepend>
            <FormControl aria-label="Text input with checkbox" />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup.Prepend>
            <FormControl aria-label="Text input with checkbox" />
          </InputGroup>

          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>


    );
    
  }
  
}


export default Accordian;