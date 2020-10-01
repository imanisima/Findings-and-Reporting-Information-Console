/**
 * 
 */

import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import MainNav from '../../bootstrap/FRIC_gui_navbar';
import SyncAnalyst from './FRIC_gui_sync_analyst'
import SyncAnalystTable from './FRIC_gui_analyst_table';
import '../../css/event/FRIC_gui_event_overview.css'

class SyncOverview extends Component {

  handleClick() {
    window.location.href = '/sync/done'
    window.open(window.location.href)
  }

  render() {
    return (
        <div className='sync_overview_div'>
            <MainNav> </MainNav>
            <br></br><br></br><br></br><br></br>
            <h1>Sync</h1>
            <br></br>
            <SyncAnalyst />
            <SyncAnalystTable/>

        <Button type="submit" className="add_btn" onClick ={this.handleClick} variant="primary">Sync</Button>
        </div>
    );
  }
}

export default SyncOverview