/*
 *
 */

export default OverviewTableRowView

let React = require('react')
let ReactDOM = require('react-dom')

class OverviewTableRowView extends React.Component {
	render() {
		return (
			<tr>
				<td><input type="checkbox" /></td>
				<td><h6>{this.props.title}</h6></td>
				<td><h6>{this.props.task}</h6></td>
				<td><h6>{this.props.analyst}</h6></td>
				<td><h6>{this.props.progress}</h6></td>
				<td><h6>{this.props.findings}</h6></td>
				<td><h6>{this.props.dueDate}</h6></td>
			</tr>
		)
	}
}

