/**
 * 
 */

import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'

class ReportTemplateTable extends Component {

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
                <th>Report Name</th>
                <th>Values and Constraints</th>
                <th>Generate report</th>
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
                        <td>ERB</td>
                        <td>###########</td>
                        <td>Generate</td>
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
                        <td>risk matrix</td>
                        <td>###########</td>
                        <td>Generate</td>
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
                        <td>Final Report</td>
                        <td>###########</td>
                        <td>Generate</td>
                    </tr>
                </tbody>
          </Table>  
        </div>
    );
  }
}
export default ReportTemplateTable