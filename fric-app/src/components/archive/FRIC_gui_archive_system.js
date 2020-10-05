import React from 'react'
import { Button } from 'react-bootstrap'
import '../../css/archive/FRIC_gui_archive_system.css'
import SystemTable from '../systems/FRIC_gui_system_table'

function FRIC_gui_archive_system() {
    return (
        <div className = "system_view">

          <h1>Archived Systems</h1>

           <SystemTable />
        
          <div className="button">
          <Button>Restore</Button>
          </div>
      </div>
    )
}

export default FRIC_gui_archive_system
