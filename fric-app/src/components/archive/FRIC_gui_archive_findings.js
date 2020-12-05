import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import ReactTooltip from "react-tooltip";
import '../../css/archive/FRIC_gui_archive_findings.css'
import ArchiveFindingTable from '../archive/FRIC_gui_archive_findingtable.js';

class FRIC_gui_archive_findings extends Component{

  archiveMainHandler(){
    window.location.href = '/archive'
    window.open(window.location.href)
}


render(){ 

    return (
        <div className = "findings_view">
        <h1>Archived Findings</h1>
        <br></br>

        {/* <ArchiveFindingTable rows={data} headings={headings} /> */}
        <h3>Wow, so empty.</h3>

        
        <div style={{ display: "inline-block", verticalAlign: "bottom" }}>
            <Button data-tip data-for="restoreArchTip">Restore</Button>
            <Button onClick={this.archiveMainHandler} data-tip data-for="archMainTip">Return to Archive View </Button> 
          </div>

            <ReactTooltip id="restoreArchTip" place="bottom" effect="solid">
              Restore archived findings.
            </ReactTooltip>

            <ReactTooltip id="archMainTip" place="bottom" effect="solid">
            Return to Archive Main View
          </ReactTooltip>
        </div>
    )
}
}

export default FRIC_gui_archive_findings
