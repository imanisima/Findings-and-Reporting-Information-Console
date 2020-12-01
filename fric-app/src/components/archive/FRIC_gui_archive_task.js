import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import ReactTooltip from "react-tooltip";
import '../../css/archive/FRIC_gui_archive_task.css'
import ArchiveTaskView from '../archive/FRIC_gui_archive_table.js';

class FRIC_gui_archive_task_view extends Component {

    archiveMainHandler(){
      window.location.href = '/archive'
      window.open(window.location.href)
  }


  render(){  

    let data = [ 
      { id: 4243, title: 'title1', task: 'task5', analyst: 'DC', progress: 34, findings: 'Occaecat nostrud fugiat ex ad elit deserunt mollit adipisicing occaecat esse dolore occaecat.', dueDate: new Date() },
      { id: 77445, title: 'title2', task: 'task4', analyst: 'MJ', progress: 21, findings: 'Est cupidatat voluptate cupidatat id sit commodo mollit exercitation pariatur tempor eiusmod.', dueDate: new Date() },
      { id: 2, title: 'title4', task: 'task2', analyst: '', progress: 78, findings: 'Pariatur dolore cupidatat voluptate cupidatat minim.', dueDate: new Date() },
      { id: 977, title: 'title5', task: 'task1', analyst: 'MS', progress: 100, findings: 'Magna nulla adipisicing Lorem sint proident elit laborum.', dueDate: new Date() },
    ]
    const headings = [
      { id: 'id', numeric: true, disablePadding: true, label: '_id' },
      { id: 'title', numeric: false, disablePadding: false, label: 'Title' },
      { id: 'task', numeric: false, disablePadding: false, label: 'Task' },
      { id: 'analyst', numeric: false, disablePadding: true, label: 'Analyst' },
      { id: 'progress', numeric: false, disablePadding: false, label: 'Progress' },
      { id: 'findings', numeric: false, disablePadding: false, label: 'Findings' },
      { id: 'dueDate', numeric: false, disablePadding: true, label: 'Due Date' },
    ];

  return (
        <div className="task_view">

         <h1>Archived Tasks</h1>

         <ArchiveTaskView rows={data} headings={headings} />
        
          {/* <div className="button"> */}
          <div style={{ display: "inline-block", verticalAlign: "bottom" }}>
            <Button data-tip data-for="restoreArchTip">Restore</Button>
            <Button onClick={this.archiveMainHandler} data-tip data-for="archMainTip">Return to Archive View </Button>  
          </div>

          <ReactTooltip id="restoreArchTip" place="bottom" effect="solid">
            Restore archived tasks.
          </ReactTooltip>

          <ReactTooltip id="archMainTip" place="bottom" effect="solid">
            Return to Archive Main View
          </ReactTooltip>
      </div>
    )
}
}

export default FRIC_gui_archive_task_view
