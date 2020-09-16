import React, { Component } from 'react';
import ReactDOM from "react-dom";
import EventsOverview from '../components/event/FRIC_gui_event_overview'
import EventDetailView from '../components/event/FRIC_gui_event_details'
 // import EventTable from '../components/event/FRIC_gui_event_table'

import MainNav from '../bootstrap/FRIC_gui_navbar.js';

export default class Event extends Component {
    render() {
      return (
            ReactDOM.render(
                <container>
                    <div>
                        <MainNav />
                        <body>
                            <EventsOverview />
                            
                        </body>
                    </div>
                </container>, document.getElementById('FRIC'))
  );
    }
  }


    // end of code
    // export default Event;