import React, {Component} from 'react';
import { ProgressBar } from 'react-bootstrap';
import MainNav from '../bootstrap/FRIC_gui_navbar.js';
import ReactDOM from "react-dom";
import Findings from '../components/findings/FRIC_gui_findings_table'
import Systems from '../components/system/FRIC_gui_system_table'
<<<<<<< HEAD
import Tasks from '../components/FRIC_gui_task/FRIC_gui_tasks_table'
import '../css/tasks/FRIC_gui_tasks_table.css'
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponents: false
    };
  }

  showButtons() {
    this.setState({
      showComponents: !this.state.showComponents
    })
    console.log(this.state.showComponents)
  }

=======
export default class Notification extends Component {
>>>>>>> 442e30811c1c180051a4380e8f7ad2a0d120a55c
    render() {
      return (
        ReactDOM.render(
            <container>
            <div>
               
                <MainNav />
               
                <body>
                  {/* Need both h1 to display header (Not sure why yet)   */}
                <h1>***</h1>
                <h1>Analyst Progress Summary Content View</h1>
                <div>
               
                  <ProgressBar variant="success" now={40} />
                  <h5>Tasks</h5>
                  <ProgressBar variant="info" now={20} />
                  <h5>Subtasks</h5>
                  <ProgressBar variant="warning" now={50} />
                  <h5>Findings</h5>
                  <ProgressBar variant="danger" now={80} />
                  <h5>Systems</h5>
                </div>
<<<<<<< HEAD
                    <h2>Tasks Overview Table</h2>
                    <Tasks></Tasks>
                    <h2>Subtasks Overview Table</h2>
                    <div>
          {
            this.state.showComponents ? 
              <>
                <Button className="edit_btn" variant="secondary" onClick={() => this.props.history.push('tasksID')}>Edit Tasks</Button> 
                <Button className="del_btn" variant="danger">Delete Task</Button> 
              </> :
              console.log("Should not be rendering")
          }
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <InputGroup className="mb-6">
                    <InputGroup.Prepend>
                      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    </InputGroup.Prepend>
                  </InputGroup>
                </th>
                <th>#</th>
                <th>Subtask</th>
                <th>Task</th>
                <th>Analyst</th>
                <th>Progress</th>
                <th>Finding</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <InputGroup className="mb-6">
                    <InputGroup.Prepend>
                      <InputGroup.Checkbox aria-label="Checkbox for following text input" onClick={() => this.showButtons()}/>
                    </InputGroup.Prepend>
                  </InputGroup>
                </td>
                <td>1</td>
                <td>Subtask 1</td>
                <td>Run Wireshark</td>
                <td>J.L.</td>
                <td>Low</td>
                <td>XYZ</td>
                <td>09/20/2020</td>
              </tr>
            </tbody>
          </Table>  
        </div>
                    <h2>Findings Overview Table</h2>
=======
                <h2>Findings Overview Table</h2>
>>>>>>> 442e30811c1c180051a4380e8f7ad2a0d120a55c
                    <Findings></Findings>
                    
                    <h2>Systems Overview Table </h2>
                    <Systems></Systems>
                    
                  
                </body>
            </div>
            </container>, document.getElementById('FRIC'))
    
        
      );
    }
    handleClick() {
        window.location.href = '/main'
        window.open(window.location.href)
      }
  }
  


    // end of code