/*
 *
 */

import React from 'react';
import SubtasksOverviewTable from './SubtasksOverviewTable';
import SubtasksDetailView from './SubtaskDetailView';
import { data, headings, subtaskTestObject, options } from '../general/test/subtaskstestdata'; //TODO: remove test data import when connected to backend

export default function SubtasksContentView(props) {
	return (
		<>
			<SubtasksOverviewTable rows={data} headings={headings} editAction={props.editAction} />
			<SubtasksDetailView selectedSubtask={subtaskTestObject} options={options} />
		</>
	);
}
