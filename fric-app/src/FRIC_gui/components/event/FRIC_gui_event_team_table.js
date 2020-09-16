import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'




class EventTeamTable extends Component {
  
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
                <Button className="arch_btn" variant="secondary" onClick={() => this.props.history.push('eventID')}>Edit</Button> 
                <Button className="save_btn" variant="danger">Archive</Button>  
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
                <th>Lead Analyst</th>
                <th>Event </th>
                <th>No. of Tasks</th>
                <th>No. of Findings</th>
                <th>Progress</th>
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
                <td>Erick</td>
                <td>"Event 1</td>
                <td>30</td>
                <td>200</td>
                <td>100%</td>
              </tr>
            </tbody>
          </Table>  
        </div>
    );
  }
}
export default EventTeamTable