import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'




class EventTable extends Component {
  
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
                <th>#</th>
                <th>Event Name</th>
                <th>No. of Systems</th>
                <th>No. of Findings</th>
                <th>Progress</th>
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
                        <td>1</td>
                        <td>Event 1</td>
                        <td>10</td>
                        <td>47</td>
                        <td>55%</td>
                    </tr>
                </tbody>
          </Table>  
        </div>
    );
  }
}
export default EventTable