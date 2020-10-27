import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import MainNav from '../../bootstrap/FRIC_gui_navbar';
import EventTeamTable from './FRIC_gui_event_team_table';
import EventBasicTable from './FRIC_gui_event_basic_information_table';
import '../../css/event/FRIC_gui_event_overview.css';
class EventDetailView extends Component {

  handleClick() {
    window.location.href = '/event/newAnalyst'
    window.open(window.location.href)
  }

  render() {
    return (
        <div className='event_detailview_div'>
        <MainNav> </MainNav>
            <br></br>
            <h3> Event Detail View </h3>
            <h5> Event Baisc Information </h5>
            <EventBasicTable />
            <Button type="submit" className="add_btn" onClick={this.handleClick} variant="primary">Add new Lead Analyst</Button>
            <Button type="submit" className="add_btn2" onClick={this.handleClick} variant="secondary">Add new Analyst</Button>
            <h5>Event Team Information</h5>
            <EventTeamTable> </EventTeamTable>
        
        </div>
    );
  }
}

export default EventDetailView