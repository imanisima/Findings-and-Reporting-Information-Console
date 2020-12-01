import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import ReactTooltip from "react-tooltip";
import '../../css/archive/FRIC_gui_archive_task.css'

class FRIC_gui_archive_task_view extends Component {
  render(){  
  return (
        <div className="task_view">

         <h1>Archived Tasks</h1>
        
          <div className="button">
            <Button data-tip data-for="restoreArchTip">Restore</Button>
          </div>

          <ReactTooltip id="restoreArchTip" place="bottom" effect="solid">
            Restore archived tasks.
          </ReactTooltip>
      </div>
    )
}
}

export default FRIC_gui_archive_task_view
