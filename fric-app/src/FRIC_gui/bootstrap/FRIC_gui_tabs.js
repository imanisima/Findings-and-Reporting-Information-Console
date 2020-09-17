import React, {Component} from 'react';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import TasksOverview from '../components/FRIC_gui_task/FRIC_gui_tasks_overview.js';
import Findings from './../components/findings/FRIC_gui_findings_content'

class TabDisplay extends Component{
  render(){

    const parentContainerStyles = {
      position: 'absolute',
      height: '100%',
      width: '100%',
      display: 'table'
    };
    
    const subContainerStyles = {
      position: 'relative',
      height: '100%',
      width: '100%',
      display: 'table-cell',
      verticalAlign: 'middle'
    };

    return (
      <div style={parentContainerStyles}>
        <div style={subContainerStyles}>

        {/* <Nav variant="tabs" defaultActiveKey="/tasks">
          <Nav.Item>
            <Nav.Link href="/tasks">Tasks</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="findings">Findings</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="archives">Archives</Nav.Link>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav> */}

        <Tab.Container id="left-tabs-example" class="main-table" defaultActiveKey="tasks">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="tasks">Tasks</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="findings">Findings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="archives">Archive</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="tasks">
                      <TasksOverview/>
                      
                        {/* <tasks /> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="findings">
                      {<Findings> </Findings>}
                    </Tab.Pane>
                    <Tab.Pane eventKey="archives">
                        {}
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>

          </div>
        </div>


    );
    
  }
  
}


export default TabDisplay;