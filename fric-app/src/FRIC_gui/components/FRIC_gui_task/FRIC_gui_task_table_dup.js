import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import '../../css/findings/FRIC_gui_findings_table.css'
import { BrowserRouter as Router} from 'react-router-dom'


class TasksTable extends Component {
  
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
    console.log("Lord pls")
    console.log(this.state.showComponents)
  }

  render() {
    return (
      <Router>
        <div>
          {
            this.state.showComponents ? 
              <>
                <Button className="edit_btn" variant="secondary" onClick={() => this.props.history.push('findingsID')}>Edit Task</Button> 
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
                <th>Task</th>
                <th>System</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Due Date</th>
                <th>ID</th>
                <th>Analyst</th>
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
                <td>Check Errors</td>
                <td>Wells Fargo ATM</td>
                <td>In Progress</td>
                <td>1</td>
                <td>08/20/2020</td>
                <td>AC</td>
              </tr>
            </tbody>
          </Table>  
        </div>
      </Router>
    );
  }
}

export default TasksTable

