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
                <Button className="arch_btn" variant="primary" onClick={() => this.props.history.push('eventID')}>Edit</Button> 
                <Button className="save_btn" variant="danger">Archive</Button>  
                <Button className="sync_btn" variant="secondary">Sync</Button>  
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
                        <th>Lead Analysts</th>
                        <th> Lead Analyst Initials </th>
                        <th>Analyst</th>
                        <th> Analyst Initials </th>
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
                        <td>Erick Nugget</td>
                        <td>EN</td>
                        <td>Raphael Turtle</td>
                        <td>RT</td>
                    </tr>
                    <tr>
                        <td>
                            <InputGroup className="mb-6">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" onClick={() => this.showButtons()} />
                                </InputGroup.Prepend>
                            </InputGroup>
                        </td>
                        <td>Erick Nugget</td>
                        <td>EN</td>
                        <td>Chris P. Bacon</td>
                        <td>CP</td>
                    </tr>
                    <tr>
                        <td>
                            <InputGroup className="mb-6">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" onClick={() => this.showButtons()} />
                                </InputGroup.Prepend>
                            </InputGroup>
                        </td>
                        <td>Erick Nugget</td>
                        <td>EN</td>
                        <td>Anita Break</td>
                        <td>AB</td>
                    </tr>
            </tbody>
          </Table>  
        </div>
    );
  }
}
export default EventTeamTable