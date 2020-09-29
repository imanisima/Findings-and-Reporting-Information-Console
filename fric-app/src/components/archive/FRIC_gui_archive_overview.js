import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import '../../css/archive/FRIC_gui_archive_overview.css'


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

             <h1> <Button onClick={this.taskHandler}>Archived Task </Button>  </h1>
             <h1> <Button onClick ={this.subtaskHandler}>Archived Subtask </Button>  </h1>
             <h1> <Button onClick = {this.findingsHandler}>Archived Finding </Button>  </h1>
             <h1><Button onClick= {this.systemHandler}>Archived System </Button></h1>
           
            </div>

        )

    }
}


export default ArchiveOverview
