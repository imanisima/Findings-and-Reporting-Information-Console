/**
 * 
 */

import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';

class SyncAnalyst extends Component {

  handleClick() {
    window.location.href = '/event/new'
    window.open(window.location.href)
  }

  render() {
      return (
          <form>
        <div className='sync_overview_div'>
                  <Form.Group as={Row} controlId="formHorizontalEventName">
                      <Form.Label column sm={2}>
                          From
                        </Form.Label>
                      <select class="FormControl" id="analyst">
                          <option>Erick Nugget</option>
                          <option>Raphael Turtle</option>
                          <option>Chris P. Bacon</option>
                          <option>Anita Break</option>
                      </select>
                  </Form.Group>
              </div>
              <Form.Group as={Row} controlId="formHorizontalLeadAnalyst">
                  <Form.Label column sm={2}>
                      IP Address
                   </Form.Label>
                  <Col sm={2}>
                      <Form.Control placeholder="2.2.2" />
                  </Col>
              </Form.Group>
        </form>
    );
  }
}

export default SyncAnalyst