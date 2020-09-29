/**
 * 
 */

import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'

class ProgressTable extends Component {
  
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
                <th>Data Type</th>
                <th> Values and Constraints</th>
                <th>Task Progress </th>
              </tr>
            </thead>
                <tbody>
                    <tr>
                        <td>
                            <InputGroup className="mb-6">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" onClick={() => this.showButtons()} />
                                </InputGroup.Prepend>
                            </InputGroup>
                        </td>
                        <td>Task1</td>
                        <td>Enumeration</td>
                        <td>Required; Not started, assigned, transferred, in progress, complete, and not applicable}; Editable if the task has no subtask. Derived: If a task has at least one subtask, the system shall calculate the progress of a task from the progresses of all its� subtasks. </td>
                        <td>33%</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>
                            <InputGroup className="mb-6">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" onClick={() => this.showButtons()} />
                                </InputGroup.Prepend>
                            </InputGroup>
                        </td>
                        <td>Task2</td>
                        <td>Enumeration</td>
                        <td>Required; Not started, assigned, transferred, in progress, complete, and not applicable}; Editable if the task has no subtask. Derived: If a task has at least one subtask, the system shall calculate the progress of a task from the progresses of all its� subtasks. </td>
                        <td>66%</td>
                    </tr>
                </tbody>
          </Table>  
        </div>
    );
  }
}
export default ProgressTable