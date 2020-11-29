import React from 'react'
import { Button } from 'react-bootstrap'
import '../../css/archive/FRIC_gui_archive_findings.css'

function FRIC_gui_archive_findings() {
    return (
        <div className = "findings_view">
        <h1>Archived Findings</h1>

        
        <div className="button">
          <Button>Restore</Button>
        </div>
      </div>
    )
}

export default FRIC_gui_archive_findings
