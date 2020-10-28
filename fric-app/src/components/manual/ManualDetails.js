import React, {Component} from 'react';

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


import '../../css/manual/ManualDetails.css';

class ManualDetails extends Component {
    render() {
      return (
        <div className='manual_details_div'>

          <br></br>
          <ConfigManual> </ConfigManual>
          <DatabaseManual> </DatabaseManual>
          <EventsManual> </EventsManual>
          <FindingsManual> </FindingsManual>
          <ProjectStructManual> </ProjectStructManual>
          <RunManual> </RunManual>
          <SubtasksManual> </SubtasksManual>
          <SyncManual> </SyncManual>
          <SystemsManual> </SystemsManual>
          <TasksManual> </TasksManual>

        </div>
      );
    }
}

export default ManualDetails