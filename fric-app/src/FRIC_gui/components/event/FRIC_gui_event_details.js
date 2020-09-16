import React, {Component} from 'react';
import EventInformation from './FRIC_gui_event_information';
import MainNav from '../../bootstrap/FRIC_gui_navbar';

import '../../css/event/FRIC_gui_event_details.css'

class EventDetail extends Component {
    render() {
        return(
            <div className='event_detail_div'>
                <MainNav> </MainNav>
                <br></br><br></br><br></br><br></br>
                <EventInformation> </EventInformation>
            </div>
        )
    }
}

export default EventDetail