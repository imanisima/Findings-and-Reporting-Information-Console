import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
// import '../../css/findings/FRIC_gui_tasks_overview.css'
import TasksTable from './FRIC_gui_task_table';

class TasksOverview extends Component {
  handleClick() {
    window.location.href = '/tasks/new'
    window.open(window.location.href)
  }

  render() {
    return (
      <div>
      <Button type="submit" className="add_btn" onClick ={this.handleClick} variant="primary">Add New Task</Button>

      <TasksTable></TasksTable>
      </div>
    );
  }
}

export default TasksOverview

// render
  // if (this.props.tasks) {
    //   var onTaskTableUpdate = this.props.onTaskTableUpdate;
    //   var task = this.props.tasks.map(function (task){
    //       return (
    //          <TaskRow onTaskTableUpdate={onTaskTableUpdate} task={task}  key={task.id}/>

    //       )
    //   });
    // }else{
    //   return(
    //     <div> 
    //       <h3 align="center">Woah. So Empty. </h3>
    //       <p align="center">Woah. So Empty. No tasks to display. </p>
        
    //     </div>
    //   );
    // }


    // return
// <container>
      //     <div>

      //       <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
          
      //       <table className="table table-bordered">
      //         <thead>
      //           <tr>
      //             <th>Assigned</th>
      //             <th>Task</th>
      //             <th>System</th>
      //             <th>Status</th>
      //             <th>Priority</th>
      //             <th>Due Date</th>
      //             <th>ID</th>
      //           </tr>
      //         </thead>

      //         <tbody>
      //           {task}

      //         </tbody>

      //       </table>


      //     </div>
      //   </container>