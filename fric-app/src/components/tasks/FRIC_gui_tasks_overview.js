import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
// import '../../css/findings/FRIC_gui_tasks_overview.css'
import TasksTable from './FRIC_gui_tasks_table';

class TasksOverview extends Component {
  
  handleClick() {
    window.location.href = '/tasks/new'
    window.open(window.location.href)
  }

  render() {
    return (
      <>
      <Button type="submit" className="add_btn" onClick ={this.handleClick} variant="primary">Add New Task</Button>

      <TasksTable></TasksTable>
      </>
    );
  }
}

export default TasksOverview