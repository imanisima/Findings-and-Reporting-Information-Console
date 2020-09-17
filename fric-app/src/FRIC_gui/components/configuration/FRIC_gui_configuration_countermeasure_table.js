import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'




class CounterMeasureTable extends Component {

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
                <th>Attribute</th>
                <th>Data Type</th>
                <th>Values and Constraints</th>
                <th>Description</th>
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
                        <td>Effective Rating</td>
                        <td>Enumeration</td>
                        <td>Very high:10,High:7-9:Moderate:4-6,Low:1-3,Very Low:0</td>
                        <td>Countermeasure description</td>
                    </tr>
                </tbody>
          </Table>  
        </div>
    );
  }
}
export default CounterMeasureTable