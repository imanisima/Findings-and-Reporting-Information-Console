/*
 *
 */

import React, {Component} from 'react'
import SubtasksOverviewTable from './SubtasksOverviewTable'
import SubtaskDetailView from './SubtaskDetailView'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

let data = [ // TODO: Testig data, delete when file is connected to production system
	{ id: 4243, title: 'title1', task: 'task5', analyst: 'DC', progress: '34', findings: '', dueDate: new Date() },
	{ id: 77445, title: 'title2', task: 'task4', analyst: 'MJ', progress: '21', findings: '', dueDate: new Date() },
	{ id: 344, title: 'title3', task: 'task3', analyst: 'II', progress: '66', findings: '', dueDate: new Date() },
	{ id: 2, title: 'title4', task: 'task2', analyst: '', progress: '78', findings: '', dueDate: new Date() },
	{ id: 977, title: 'title5', task: 'task1', analyst: 'MS', progress: '100', findings: '', dueDate: new Date() },
]

export default class SubtasksView extends Component {
	render() {
		return (
			<>
				<Button variant="primary">Add +</Button>
				<SubtasksOverviewTable data={data} />
				{/* <SubtaskDetailView /> */}

				<div>
					<Button className="" variant="success">Archive</Button>
					<Button className="" variant="primary">Promote</Button>
					<Button className="" variant="primary">Save</Button>
					<Button className="" variant="danger">Cancel</Button>
				</div>
			</>
		)
	}
}