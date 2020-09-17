import React from 'react'
import { Button } from 'react-bootstrap'
import MainNav from '../../bootstrap/FRIC_gui_navbar';
import '../../css/archive/FRIC_gui_archive_subtask.css'

function FRIC_gui_archive_subtask() {
    return (
        <div className = "subtask_view">
          <MainNav> </MainNav>
        <h1>Archived Subtasks</h1>

        <h2>Insert Subtask Overview Table </h2>
        
        <div className="button">
          <Button>Restore</Button>
        </div>
      </div>
    )
}

export default FRIC_gui_archive_subtask
