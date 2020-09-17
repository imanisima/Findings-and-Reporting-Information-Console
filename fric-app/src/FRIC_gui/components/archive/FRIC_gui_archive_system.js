import React from 'react'
import { Button } from 'react-bootstrap'
import MainNav from '../../bootstrap/FRIC_gui_navbar';
import '../../css/archive/FRIC_gui_archive_system.css'
import SystemTable from '../system/FRIC_gui_system_table'

function FRIC_gui_archive_system() {
    return (
        <div className = "system_view">
          <MainNav> </MainNav>

          <h1>Archived Systems</h1>

           <SystemTable />
        
          <div className="button">
          <Button>Restore</Button>
          </div>
      </div>
    )
}

export default FRIC_gui_archive_system
