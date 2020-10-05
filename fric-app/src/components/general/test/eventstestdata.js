/* TODO: Testing data, delete file when connected to backend production system */
// Available options for detail view

import { EventType } from '../EnumeratedTypes';

const analysts = ['Marco Soto', 'Ben Dover', 'Don Glover', 'Mike Hunt', 'Harry Beaver', 'P. Huck Hughson'];

export const options = {
	analysts: analysts,
	collabs: analysts,
	tasks: ['task1', 'task2', 'task3', 'task4'],
	subtasks: ['subtask1', 'subtask2', 'subtask3', 'subtask4', 'subtask5'],
	types: Object.values(EventType),
}

export let eventTestObject = {
	_id: 'sew3234',
	name: 'Task Test Object',
	description: 'Voluptate anim non amet cupidatat ut pariatur amet deserunt do irure incididunt nostrud.',
	leadAnalysts: [],
	collabs: [analysts[2], analysts[4]],
	task: 'Aliquip sit duis veniam qui.',
	dueDate: new Date(),
	attachment: null,
	archiveStatus: false,
}

// Data passed into overview table
export let data = [
	{ id: 4243, name: 'event1', numSystems: 5, numFindings: 5, progress: 'Not Applicable', },
	{ id: 77445, name: 'event2', numSystems: 4, numFindings: 5, progress: 'Not Started', },
	{ id: 344, name: 'event3', numSystems: 10, numFindings: 5, progress: 'Transferred', },
	{ id: 2, name: 'event4', numSystems: 0, numFindings: 5, progress: 'In Progress', },
	{ id: 977, name: 'event5', numSystems: 69, numFindings: 5, progress: 'Complete', },
]

export const headings = [
	{ id: 'id', numeric: true, disablePadding: true, label: '_id' },
	{ id: 'name', numeric: false, disablePadding: false, label: 'Name' },
	{ id: 'numSystems', numeric: true, disablePadding: false, label: 'No. of Systems' },
	{ id: 'numFindings', numeric: true, disablePadding: true, label: 'No. of Findings' },
	{ id: 'progress', numeric: false, disablePadding: false, label: 'Progress' },
];
