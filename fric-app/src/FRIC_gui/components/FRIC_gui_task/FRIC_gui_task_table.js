import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import '../../css/tasks/FRIC_gui_task_table.css'




class TaskTable extends Component {
  
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

  render() {
    return (
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
                <th>Task</th>
                <th>System</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Due Date</th>
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
                <td>1</td>
                <td>Run Wireshark</td>
                <td>Wells Fargo Switch #5</td>
                <td>Acknowledged</td>
                <td>Low</td>
                <td>09/20/2020</td>
                <td>J.L.</td>
              </tr>
            </tbody>
          </Table>  
        </div>
    );
  }
}

export default TaskTable