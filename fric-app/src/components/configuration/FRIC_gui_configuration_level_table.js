/**
 * 
 */

import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'
//import Button from 'react-bootstrap/Button';

class LevelTable extends Component {

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
                <th>System Name</th>
                <th>System Confidentiality</th>
                <th>System Integrity</th>
                <th>System Availability</th>
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
                        <td>###########</td>
                        <td>###########</td>
                        <td>###########</td>
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
                        <td>2</td>
                        <td>###########</td>
                        <td>###########</td>
                        <td>###########</td>
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
                        <td>3</td>
                        <td>###########</td>
                        <td>###########</td>
                        <td>###########</td>
                    </tr>
                </tbody>
          </Table>  
        </div>
    );
  }
}
export default LevelTable