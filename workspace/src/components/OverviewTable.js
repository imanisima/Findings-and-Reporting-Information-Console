/*
 *
 */

export default OverviewTable

import OverviewTableRowView from 'components/OverviewTableRowView'

let React = require('react')
let ReactDOM = require('react-dom')

class OverviewTableView extends React.Component {
	render() {
		return (
			<div>
				<table>
					<thead>
						<th></th>
						<th>Title</th>
						<th>Task</th>
						<th>Analyst</th>
						<th>Progress</th>
						<th>Findings</th>
						<th>Due Date</th>
					</thead>
					<tbody><OverviewTableRowView /></tbody>
				</table>
			</div>
		)
	}
}

