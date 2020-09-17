import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import MainNav from '../../bootstrap/FRIC_gui_navbar';
import '../../css/archive/FRIC_gui_archive_task.css'
import TaskTable from '../FRIC_gui_task/FRIC_gui_tasks_table'

class FRIC_gui_archive_task_view extends Component {
  render(){  
  return (
        <div className="task_view">

          <MainNav> </MainNav>

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
