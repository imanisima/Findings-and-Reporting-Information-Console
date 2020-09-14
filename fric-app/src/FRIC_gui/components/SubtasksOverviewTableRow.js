/*
 *
 */

import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'

export default class SubtasksOverviewTableRow extends Component {
	render() {
		return (
			<tr>
				<Form.Check custom id={`row-${this.props.id}`} type="checkbox" label/>
				<td><h6>{this.props.title}</h6></td>
				<td><h6>{this.props.task}</h6></td>
				<td><h6>{(this.props.analyst) ? this.props.analyst: 'n/a'}</h6></td>
				<td><h6>{this.props.progress}%</h6></td>
				<td><h6>{(this.props.findings) ? this.props.findings: 'n/a'}</h6></td>
				<td><h6>{this.props.dueDate.toLocaleString()}</h6></td>
			</tr>
		)
	}
}

