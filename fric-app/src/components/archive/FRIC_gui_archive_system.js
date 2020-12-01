import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import ReactTooltip from "react-tooltip";
import '../../css/archive/FRIC_gui_archive_system.css'

class FRIC_gui_archive_system extends Component {

  archiveMainHandler(){
    window.location.href = '/archive'
    window.open(window.location.href)
}


render(){

    return (
        <div className = "system_view">

          <h1>Archived Systems</h1>
        
          <div className="button">
            <div style={{ display: "inline-block", verticalAlign: "bottom" }}>
              <Button data-tip data-for="restoreArchTip">Restore</Button>
              <Button onClick={this.archiveMainHandler} data-tip data-for="archMainTip">Return to Archive View </Button> 
            </div>

            <ReactTooltip id="restoreArchTip" place="bottom" effect="solid">
              Restore archived subtasks.
            </ReactTooltip>

            <ReactTooltip id="archMainTip" place="bottom" effect="solid">
              Return to Archive Main View
            </ReactTooltip>

          </div>
      </div>
    )
}
}

export default FRIC_gui_archive_system
