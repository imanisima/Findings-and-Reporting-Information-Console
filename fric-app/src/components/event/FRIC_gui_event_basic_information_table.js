import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'




class EventBasicTable extends Component {
  
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
                <th>Event Name</th>
                <th>Event Description </th>
                <th>Event Type</th>
                <th>Event Version</th>
                <th>Assesment Date</th>
                <th>Organization Name</th>
                <th>Security Classification Title Guide</th>
                <th>Event Classification</th>
                <th>Declassification Date</th>
                <th>Customer Name</th>
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
                <td>Event 1</td>
                <td>Event description</td>
                <td>Event Type</td>
                <td>2.0</td>
                <td>9/15/2020</td>
                <td>UTEP</td>
                <td>Secuirty Classification title</td>
                <td>Event Classification</td>
                <td>9/15/2050</td>
                <td>The Government</td>
              </tr>
            </tbody>
          </Table>  
        </div>
    );
  }
}
export default EventBasicTable