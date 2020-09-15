/*
 *
 */

import React, {Component} from 'react'
import SubtasksOverviewTable from './SubtasksOverviewTable'
import SubtaskDetailView from './SubtaskDetailView'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import styles from '../css/SubtasksContentView.module.css'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

// TODO: Testing data, delete when file is connected to production system
let data = [ 
	{ id: 4243, title: 'title1', task: 'task5', analyst: 'DC', progress: 34, findings: '', dueDate: new Date() },
	{ id: 77445, title: 'title2', task: 'task4', analyst: 'MJ', progress: 21, findings: '', dueDate: new Date() },
	{ id: 344, title: 'title3', task: 'task3', analyst: 'II', progress: 66, findings: '', dueDate: new Date() },
	{ id: 2, title: 'title4', task: 'task2', analyst: '', progress: 78, findings: '', dueDate: new Date() },
	{ id: 977, title: 'title5', task: 'task1', analyst: 'MS', progress: 100, findings: '', dueDate: new Date() },
]
let analysts = ['MS', 'NO', 'SD', 'WE', 'VD', 'WO']
let collabs = ['MS', 'NO', 'SD', 'WE', 'VD', 'WO']
let tasks = ['task1', 'task2', 'task3', 'task4']
let subtasks = ['subtask1', 'subtask2', 'subtask3', 'subtask4', 'subtask5']
let progOptions = [33,55,66,35,78,74,21]
let taskObject = {
	title: 'Task Test Object',
	description: 'Voluptate anim non amet cupidatat ut pariatur amet deserunt do irure incididunt nostrud.',
	progress: 99,
	dueDate: new Date()
}
// End Testing Data

export default class SubtasksContentView extends Component {
	render() {
		return (
			<div className="sytles.subtaskContentView">
				{/* Subtasks Table View Card */}
				<Card className={styles.subtaskTableCard}>
					<Card.Header>
						<div className={styles.menuButtonContainer}>
							<Button className={styles.menuButton} variant="success">Archive</Button>
							<Button className={styles.menuButton} variant="primary">Promote</Button>
							<Button className={styles.menuButton} variant="primary">Save</Button>
							<Button className={styles.menuButton} variant="danger">Cancel</Button>
						</div>
						
						<div className={styles.addButtonContainer}>
							<Button className={styles.addButton} variant="primary">New <AddCircleOutlineIcon className={styles.alignCenter} fontSize="small" /></Button>
						</div>
					</Card.Header>

					<Card.Body>
						<SubtasksOverviewTable data={data} />
					</Card.Body>
				</Card>

				{/* Subtask Detail View Card */}
				<Card className={styles.subtaskDetailCard}>
					<Card.Body>
						<SubtaskDetailView 
							selected={taskObject}
							progressOptions={progOptions}
							analystOptions={analysts}
							collabOptions={collabs}
							taskOptions={tasks}
							subtaskOptions={subtasks}
						/>
					</Card.Body>
				</Card>
			</div>
		)
	}
}