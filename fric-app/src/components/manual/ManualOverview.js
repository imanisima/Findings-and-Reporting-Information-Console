import React, {Component} from 'react';
import '../../css/manual/ManualOverview.css'
import { Link, useLocation } from 'react-router-dom';

import ConfigManual from './ConfigManual';
import DatabaseManual from './DatabaseManual';
import EventsManual from './EventsManual';
import FindingsManual from './FindingsManual';
import ProjectStructManual from './ProjectStructManual';
import RunManual from './RunManual';
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
                <DatabaseManual /> {/* <-- Ask about this */}
                <EventsManual />
                {/* <FindingsManual /> */}
                {/* <ProjectStructManual /> */}
                {/* <RunManual /> */}
                {/* <SubtasksManual/> */}
                {/* <SyncManual/> */}
                {/* <SystemsManual /> */}
                {/* <TasksManual /> */}

              </body>

          </div>
      );
    }
     
  }
  
  export default ManualOverview