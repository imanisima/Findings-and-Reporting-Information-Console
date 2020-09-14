import React, {Component} from 'react';
// import Button from 'react-bootstrap/Button'
// import '../../css/findings/FRIC_gui_tasks_overview.css'
import TasksTable from './FRIC_gui_task_table';

class TasksOverview extends Component {

  render() {
    return (
      <div>
      {/* <Button className="erb_btn" variant="primary">ERB Report</Button>
      <Button className="risk_btn" variant="primary">Risk Matrix</Button>
      <Button className="final_btn" variant="primary">Final Report</Button> */}
      <TasksTable></TasksTable>
      </div>
    );
  }
}

export default TasksOverview