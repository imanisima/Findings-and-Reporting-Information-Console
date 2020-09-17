import React from 'react'
import { Button } from 'react-bootstrap'
import MainNav from '../../bootstrap/FRIC_gui_navbar';
import '../../css/archive/FRIC_gui_archive_findings.css'
import FindingsTable from '../../components/findings/FRIC_gui_findings_table'

function FRIC_gui_archive_findings() {
    return (
        <div className = "findings_view">
          <MainNav> </MainNav>
        <h1>Archived Findings</h1>

        <FindingsTable/>
        
        <div className="button">
          <Button>Restore</Button>
        </div>
      </div>
    )
}

export default FRIC_gui_archive_findings
