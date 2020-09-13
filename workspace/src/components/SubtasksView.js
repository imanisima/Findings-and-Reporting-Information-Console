/*
 *
 */

export default SubtasksView

import OverviewTableView from 'components/OverviewTableView'
import SubtaskDetailView from 'components/SubtaskDetailView'

let React = require('react')
let ReactDOM = require('react-dom')

class SubtasksView extends React.Component {
	render() {
		return (
			<div>
				<div>
					<OverviewTableView />
					<button type="button"><img src="" >Add Icon</img></button>
				</div>
				<div>
					<SubtaskDetailView />
				</div>
				<div>
					<button type="button">Archive</button>
					<button type="button">Promote</button>
					<button type="button">Save</button>
					<button type="button">Cancel</button>
				</div>
			</div>
		)
	}
}