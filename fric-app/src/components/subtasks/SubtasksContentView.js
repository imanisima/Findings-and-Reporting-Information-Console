/*
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import SubtasksOverviewTable from './SubtasksOverviewTable';
import SubtaskDetailView from './SubtaskDetailView';
import styles from '../../css/subtasks/SubtasksContentView.module.css';
import { data, headings, subtaskTestObject, options } from '../general/test/subtaskstestdata'; //TODO: remove test data import when connected to backend

export default function SubtasksContentView(props) {
	return (
		<div>
			<div className={styles.tableView}>
				<SubtasksOverviewTable rows={data} headings={headings} editAction={props.editAction} />
			</div>
			<div className={styles.detailView}>
				{
					false && <SubtaskDetailView selectedTask={subtaskTestObject} options={options} />
				}
			</div>
		</div>
	);
}

SubtasksContentView.propTypes = {

}
