/*
 *
 */

import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import SubtasksOverviewTableRow from './SubtasksOverviewTableRow'

export default class SubtasksOverviewTable extends Component {
	render() {
		return (
			<div>
				<Table striped bordered responsive size="sm" variant="dark">
					<thead>
						<th><Form.Check custom id="selectAll" type="checkbox" label/></th>
						<th>Title</th>
						<th>Task</th>
						<th>Analyst</th>
						<th>Progress</th>
						<th>Findings</th>
						<th>Due Date</th>
					</thead>
					<tbody>
						{this.props.data.map((item, n) => {
							return <SubtasksOverviewTableRow 
							id={item.id} 
							title={item.title} 
							task={item.task} 
							analyst={item.analyst} 
							progress={item.progress} 
							findings={item.findings} 
							dueDate={item.dueDate} />}
						)}
					</tbody>
				</Table>
			</div>
		)
	}
}

