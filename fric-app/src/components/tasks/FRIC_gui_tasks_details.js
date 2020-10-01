import React, {Component} from 'react';
import TaskInformation from './FRIC_gui_tasks_information';
import '../../css/tasks/FRIC_gui_tasks_details.css';

class TasksDetails extends Component {
    render() {
      return (
        <div className='task_details_div'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <TaskInformation> </TaskInformation>
        </div>
      );
    }
}

export default TasksDetails
