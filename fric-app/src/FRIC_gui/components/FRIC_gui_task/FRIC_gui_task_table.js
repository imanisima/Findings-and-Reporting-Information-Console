import React, {Component} from 'react';
// import Table from 'react-bootstrap/Table'
// import BootstrapTable from 'react-bootstrap-table-next';
// import InputGroup from 'react-bootstrap/InputGroup'
// import Button from 'react-bootstrap/Button'

// import { BrowserRouter as Router} from 'react-router-dom'

// import Tasks from './FRIC_gui_task';
import TaskRow from './FRIC_gui_taskrow';
// import '../../css/findings/FRIC_gui_findings_table.css'


class TasksTable extends Component {

  render() {

    // var onTaskTableUpdate = this.props.onTaskTableUpdate;

    if (this.props.tasks) {
      var onTaskTableUpdate = this.props.onTaskTableUpdate;
      var task = this.props.tasks.map(function (task){
          return (
            <div>
             <TaskRow onTaskTableUpdate={onTaskTableUpdate} task={task}  key={task.id}/>
            </div>
          );
      });
    }else{
      return(
        <div> 
          <h3 align="center">Woah. So Empty. </h3>
          <p align="center">Woah. So Empty. No tasks to display. </p>
        
        </div>
      )
    }
    

    return (
      <container>
          <div>

            <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
          
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Assigned</th>
                  <th>Task</th>
                  <th>System</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Due Date</th>
                  <th>ID</th>
                </tr>
              </thead>

              <tbody>
                {task}

              </tbody>

            </table>


          </div>
        </container>
    );
  }
}

export default TasksTable