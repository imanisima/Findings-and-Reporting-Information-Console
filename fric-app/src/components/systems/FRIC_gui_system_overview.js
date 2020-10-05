import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import SystemsTable from './FRIC_gui_system_table'

import '../../css/systems/FRIC_gui_system_overview.css'

class SystemsOverview extends Component {

  handleClick() {
    window.location.href = '/systems/new'
    window.open(window.location.href)
  }

  render() {
    return (
        <div className='systems_overview_div'>
        <br></br><br></br><br></br><br></br>
        <h3>Systems Overview</h3>
        <Button type="submit" className="add_btn" onClick ={this.handleClick} variant="primary">Add new system</Button>
        <SystemsTable> </SystemsTable>
        </div>
    );
  }
}

export default SystemsOverview