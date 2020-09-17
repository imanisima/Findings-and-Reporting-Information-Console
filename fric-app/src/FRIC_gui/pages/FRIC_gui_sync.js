import React, { Component } from 'react';
import ReactDOM from "react-dom";
import SyncOverview from '../components/sync/FRIC_gui_sync_overview'

// import EventTable from '../components/event/FRIC_gui_event_table'

import MainNav from '../bootstrap/FRIC_gui_navbar.js';

export default class Sync extends Component {
    render() {
        return (
            ReactDOM.render(
                <container>
                    <div>
                        <MainNav />
                        <body>
                            <SyncOverview />
                        </body>
                    </div>
                </container>, document.getElementById('FRIC'))
        );
    }
}


    // end of code
    // export default Event;