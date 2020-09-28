/**
 * 
 */

import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'

class FindingClassificationTable extends Component {

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
                        <td>Finding Description</td>
                        <td>String</td>
                        <td>Editable;Appendable</td>
                        <td>long description of vulnerability</td>
                    </tr>
                </tbody>
          </Table>  
        </div>
    );
  }
}
export default FindingClassificationTable