import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import '../../css/findings/FRIC_gui_findings_table.css'




class FindingsTable extends Component {
  
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
        <div>
          {
            this.state.showComponents && (
              <>
                <Button className="edit_btn" variant="secondary" onClick={() => this.props.history.push('findingsID')}>Edit Finding</Button> 
                <Button className="del_btn" variant="danger">Delete Finding</Button> 
              </>
            )
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
                <th>ID</th>
                <th>Title</th>
                <th>System</th>
                <th>Task</th>
                <th>Subtask</th>
                <th>Analyst</th>
                <th>Status</th>
                <th>Classification</th>
                <th>Type</th>
                <th>Risk</th>
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
                <td>"IDNumber"</td>
                <td>"TitleString"</td>
                <td>"SystemString"</td>
                <td>"TaskString"</td>
                <td>"SubtaskString"</td>
                <td>"AnalystString"</td>
                <td>"StatusString"</td>
                <td>"ClassificationString"</td>
                <td>"TypeString"</td>
                <td>"RiskString"</td>
              </tr>
            </tbody>
          </Table>  
        </div>
    );
  }
}

export default FindingsTable