import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import '../../css/archive/FRIC_gui_archive_task.css'
import TaskTable from '../tasks/FRIC_gui_tasks_table'

class FRIC_gui_archive_task_view extends Component {
  render(){  
  return (
        <div className="task_view">

         <h1>Archived Tasks</h1>
  
         <TaskTable />
        
          <div className="button">
            <Button>Restore</Button>
          </div>
      </div>
    )
}
}

export default FRIC_gui_archive_task_view
