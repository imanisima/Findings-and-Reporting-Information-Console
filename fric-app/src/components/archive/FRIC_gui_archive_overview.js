import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ReactTooltip from "react-tooltip";

import '../../css/archive/FRIC_gui_archive_overview.css';


class ArchiveOverview extends Component {
    
    taskHandler(){
        window.location.href = '/archive/archive_task_view'
        window.open(window.location.href)
    }

    subtaskHandler(){
        window.location.href = '/archive/archive_subtask_view'
        window.open(window.location.href)
    }

    findingsHandler(){
        window.location.href = '/archive/archive_finding_view'
        window.open(window.location.href)
    }

    systemHandler(){
        window.location.href = '/archive/archive_system_view'
        window.open(window.location.href)
    }

    render (){
        return(

            <div className="buttons">

                <div className="archive">
                    <h2>Archived Artifacts</h2>
                </div>
                
                <br></br>

                        <h1> 
                            <br></br> <br></br>
                            <Button onClick={this.taskHandler} data-tip data-for="archTaskTip">Archived Tasks </Button>  
                            <ReactTooltip id="archTaskTip" place="bottom" effect="solid">
                                View Archived Tasks
                            </ReactTooltip>
                        </h1>

                        <h1> 
                        <br></br> <br></br>
                            <Button onClick ={this.subtaskHandler} data-tip data-for="archSubtaskTip">Archived Subtasks </Button>  
                            <ReactTooltip id="archSubtaskTip" place="bottom" effect="solid">
                                View Archived Subtasks
                            </ReactTooltip>
                        </h1>

                        <h1> 
                        <br></br> <br></br>
                            <Button onClick = {this.findingsHandler} data-tip data-for="archTaskTip">Archived Findings </Button>  
                            <ReactTooltip id="archTaskTip" place="bottom" effect="solid">
                                View Archived Findings
                            </ReactTooltip>
                            
                        </h1>

                        <h1>
                        <br></br> <br></br>
                            <Button onClick= {this.systemHandler} data-tip data-for="archSystemTip">Archived Systems </Button>

                            <ReactTooltip id="archSystemTip" place="bottom" effect="solid">
                            View Archived Systems
                            </ReactTooltip>
                            
                        </h1>
           
            </div>

        )

    }
}


export default ArchiveOverview
