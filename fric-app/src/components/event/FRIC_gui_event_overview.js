import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import MainNav from '../../bootstrap/FRIC_gui_navbar';
import EventTable from './FRIC_gui_event_table'
import '../../css/event/FRIC_gui_event_overview.css'

class EventsOverview extends Component {

  handleClick() {
    window.location.href = '/event/new'
    window.open(window.location.href)
  }

  render() {
    return (
        <div className='event_overview_div'>
        <MainNav> </MainNav>
        <br></br><br></br><br></br><br></br>
        <h3>Event Overview</h3>
        <Button type="submit" className="add_btn" onClick ={this.handleClick} variant="primary">Add new event</Button>
        <EventTable> </EventTable>
        </div>
    );
  }
}

export default EventsOverview