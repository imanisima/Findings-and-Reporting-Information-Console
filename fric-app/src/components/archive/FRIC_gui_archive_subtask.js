import React from 'react'
import { Button } from 'react-bootstrap'
import MainNav from '../../bootstrap/FRIC_gui_navbar';
import '../../css/archive/FRIC_gui_archive_subtask.css'
import SubtasksOverviewTable from '../subtasks/SubtasksOverviewTable'



function FRIC_gui_archive_subtask() {
  
  let data = [ 
    { id: 4243, title: 'title1', task: 'task5', analyst: 'DC', progress: 34, findings: 'Occaecat nostrud fugiat ex ad elit deserunt mollit adipisicing occaecat esse dolore occaecat.', dueDate: new Date() },
    { id: 77445, title: 'title2', task: 'task4', analyst: 'MJ', progress: 21, findings: 'Est cupidatat voluptate cupidatat id sit commodo mollit exercitation pariatur tempor eiusmod.', dueDate: new Date() },
    { id: 344, title: 'title3', task: 'task3', analyst: 'II', progress: 66, findings: 'Fugiat veniam deserunt cillum labore consectetur tempor elit esse nisi.', dueDate: new Date() },
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
        <div className = "subtask_view">
          <MainNav> </MainNav>
        <h1>Archived Subtasks</h1>

        <SubtasksOverviewTable rows={data} headings={headings} />
        
        <div className="button">
          <Button>Restore</Button>
        </div>
      </div>
    )
}

export default FRIC_gui_archive_subtask
