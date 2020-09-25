import React, {Component} from 'react';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import TasksOverview from '../components/FRIC_gui_task/FRIC_gui_tasks_overview.js';
import Findings from './../components/findings/FRIC_gui_findings_content'
import Archive from './../components/archive/FRIC_gui_archive_content'
import SetupContentView from './../components/setup/SetupForm'
import axios from 'axios'

class TabDisplay extends Component{
  constructor (props) {
    super(props);

    this.state ={
      events: null
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/events/')
    .then(response =>  {
        console.log(response.data);
        this.setState({ events: response.data})
    })
    .catch(error => {
        console.log(error)
    });
  }

  render(){
    console.log(this.state.events)
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
            { this.state.events && this.state.events.length > 0 ?
              <> 
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
                            {<Archive/>}
                          </Tab.Pane>
                      </Tab.Content>
                      </Col>
                  </Row>
                  </Tab.Container>
                </>
              :
                <>
                {/*This is if there is no event, this is what gets displayed instead*/}
                <SetupContentView />
                </>
            }

            </div>
          </div>



    );
    
  }
  
}


export default TabDisplay;