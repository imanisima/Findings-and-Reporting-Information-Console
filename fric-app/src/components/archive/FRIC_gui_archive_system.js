import React from 'react'
import { Button } from 'react-bootstrap'
import '../../css/archive/FRIC_gui_archive_system.css'

function FRIC_gui_archive_system() {
    return (
        <div className = "system_view">

          <h1>Archived Systems</h1>
        
          <div className="button">
          <Button>Restore</Button>
          </div>
      </div>
    )
}

export default FRIC_gui_archive_system
