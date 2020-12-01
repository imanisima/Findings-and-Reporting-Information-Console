import React from 'react'
import { Button } from 'react-bootstrap'
import ReactTooltip from "react-tooltip";
import '../../css/archive/FRIC_gui_archive_system.css'

function FRIC_gui_archive_system() {
    return (
        <div className = "system_view">

          <h1>Archived Systems</h1>
        
          <div className="button">
          <Button data-tip data-for="restoreArchTip">Restore</Button>

          <ReactTooltip id="restoreArchTip" place="bottom" effect="solid">
            Restore archived systems.
          </ReactTooltip>
          </div>
      </div>
    )
}

export default FRIC_gui_archive_system
