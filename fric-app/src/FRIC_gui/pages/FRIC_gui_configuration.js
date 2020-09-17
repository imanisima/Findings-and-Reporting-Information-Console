import React, { Component } from 'react';
import ReactDOM from "react-dom";
import ConfigurationOverview from '../components/configuration/FRIC_gui_configuration_overview'

// import EventTable from '../components/event/FRIC_gui_event_table'

import MainNav from '../bootstrap/FRIC_gui_navbar.js';

export default class Configuration extends Component {
    render() {
        return (
            ReactDOM.render(
                <container>
                    <div>
                        <MainNav />
                        <body>
                            <ConfigurationOverview/>
                        </body>
                    </div>
                </container>, document.getElementById('FRIC'))
        );
    }
}


    // end of code
    // export default Event;