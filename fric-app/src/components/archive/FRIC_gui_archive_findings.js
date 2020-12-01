import React from 'react'
import { Button } from 'react-bootstrap'
import ReactTooltip from "react-tooltip";
import '../../css/archive/FRIC_gui_archive_findings.css'

function FRIC_gui_archive_findings() {
    return (
        <div className = "findings_view">
        <h1>Archived Findings</h1>

        
        <div className="button">
          <Button data-tip data-for="restoreArchTip">Restore</Button>

          <ReactTooltip id="restoreArchTip" place="bottom" effect="solid">
            Restore archived findings.
          </ReactTooltip>
        </div>
      </div>
    )
}

export default FRIC_gui_archive_findings
