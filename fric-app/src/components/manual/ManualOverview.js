import React, {Component} from 'react';
import '../../css/manual/ManualOverview.css';

import ConfigManual from './ConfigManual';
import DatabaseManual from './DatabaseManual';
import EventsManual from './EventsManual';
import FindingsManual from './FindingsManual';
import SubtasksManual from './SubtasksManual';
import SyncManual from './SyncManual';
import SystemsManual from './SystemsManual';
import TasksManual from './TasksManual';

// class ManualOverview extends Component {
  class ManualOverview extends Component{

    handleClick() {
      window.location.href = '/manual'
      window.open(window.location.href)
    }

    render() {
      return (
          <div>
              <br></br><br></br>
              <h1 class="manual_header">Manual Page</h1>
              <p class="manual_header"> Search for the page you'd like to know more about! </p>
              <br></br>

              <body>
                <ConfigManual />
                <br></br><br></br>

                <DatabaseManual /> {/* <-- Ask about this */}
                <br></br><br></br>

                <EventsManual />
                <br></br><br></br>

                <FindingsManual />
                <br></br><br></br>

                <SubtasksManual/>
                <br></br><br></br>

                <SyncManual/>
                <br></br><br></br>

                <SystemsManual />
                <br></br><br></br>

                <TasksManual />
                <br></br><br></br>

              </body>

          </div>
      );
    }
     
  }
  
  export default ManualOverview