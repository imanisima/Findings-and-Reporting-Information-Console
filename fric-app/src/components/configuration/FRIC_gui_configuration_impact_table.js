/**
 * 
 */

import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'

class ImpactTable extends Component {

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
                        <td>Confidentiality</td>
                        <td>Enumeration</td>
                        <td>low</td>
                        <td>Confidentiality level of a finding</td>
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
                        <td>Integrity</td>
                        <td>Enumeration</td>
                        <td>Medium</td>
                        <td>Integrity level of a finding</td>
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
                        <td>Abaiability</td>
                        <td>Enumeration</td>
                        <td>High</td>
                        <td>Availability level of a finding</td>
                    </tr>
                </tbody>
          </Table>  
        </div>
    );
  }
}
export default ImpactTable