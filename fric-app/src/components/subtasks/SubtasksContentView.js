/*
 *
 */

import React from 'react'
import SubtasksOverviewTable from './SubtasksOverviewTable'
import SubtaskDetailView from './SubtaskDetailView'
import styles from '../../css/subtasks/SubtasksContentView.module.css'
import MainNav from '../../bootstrap/FRIC_gui_navbar';
import { data, headings, subtaskTestObject, options } from '../general/subtaskstestdata'; //TODO: remove test data import when connected to backend

export default function SubtasksContentView() {
	return (
		<>
			<MainNav />
			<div className={styles.contentContainer}>
				<div className={styles.tableView}>
					<SubtasksOverviewTable rows={data} headings={headings} />
				</div>
				<div className={styles.detailView}>
					<SubtaskDetailView selectedTask={subtaskTestObject} options={options} />
				</div>
			</div>
		</>
	)
}
