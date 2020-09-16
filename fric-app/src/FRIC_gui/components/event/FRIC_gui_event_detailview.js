import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import MainNav from '../../bootstrap/FRIC_gui_navbar';
import EventTeamTable from './FRIC_gui_event_team_table'
import '../../css/event/FRIC_gui_event_overview.css'

class EventDetailView extends Component {

  handleClick() {
    window.location.href = '/event/new'
    window.open(window.location.href)
  }

  render() {
    return (
        <div className='event_overview_div'>
        <MainNav> </MainNav>
        <br></br><br></br><br></br><br></br>
        <h3>Event Detail View</h3>
        <EventTeamTable> </EventTeamTable>
        </div>
    );
  }
}

export default EventDetailView