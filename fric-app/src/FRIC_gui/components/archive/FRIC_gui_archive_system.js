import React from 'react'
import { Button } from 'react-bootstrap'
import MainNav from '../../bootstrap/FRIC_gui_navbar';
import '../../css/archive/FRIC_gui_archive_system.css'

function FRIC_gui_archive_system() {
    return (
        <div className = "system_view">
          <MainNav> </MainNav>

          <h1>Archived Systems</h1>

           <h2>Insert System Overview Table </h2>
        
          <div className="button">
          <Button>Restore</Button>
          </div>
      </div>
    )
}

export default FRIC_gui_archive_system
