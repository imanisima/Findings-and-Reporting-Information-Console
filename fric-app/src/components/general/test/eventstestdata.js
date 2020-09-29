/* TODO: Testing data, delete file when connected to backend production system */
// Available options for detail view
<<<<<<< HEAD

import { EventType } from '../../../shared/EnumeratedTypes';

const analysts = ['Marco Soto', 'Ben Dover', 'Don Glover', 'Mike Hunt', 'Harry Beaver', 'P. Huck Hughson'];

export const options = {
	analysts: analysts,
	collabs: analysts,
	tasks: ['task1', 'task2', 'task3', 'task4'],
	subtasks: ['subtask1', 'subtask2', 'subtask3', 'subtask4', 'subtask5'],
	types: Object.values(EventType),
=======
const Progression = {
	NOTSTARTED: 'Not Started',
	ASSIGNED: 'Assigned',
	TRANSFERRED: 'Transferred',
	INPROGRESS: 'In Progress',
	COMPLETE: 'Complete',
	NOTAPPLICABLE: 'Not Applicable',
}

const Priority = { LOW: 'Low', MEDIUM: 'Medium', HIGH: 'High' }

export const options = {
	analysts: ['Marco Soto', 'Ben Dover', 'Don Glover', 'Mike Hunt', 'Harry Beaver', 'P. Huck Hughson'],
	collabs: ['Marco Soto', 'Ben Dover', 'Don Glover', 'Mike Hunt', 'Harry Beaver', 'P. Huck Hughson'],
	tasks: ['task1', 'task2', 'task3', 'task4'],
	subtasks: ['subtask1', 'subtask2', 'subtask3', 'subtask4', 'subtask5'],
	progress: Object.values(Progression),
	types: ['type1', 'type2', 'type3', 'type4', 'type5',],
>>>>>>> 234a7b96... New system template, frontend layout and project structure changes (#12)
}

export let eventTestObject = {
	_id: 'sew3234',
<<<<<<< HEAD
	name: 'Task Test Object',
	description: 'Voluptate anim non amet cupidatat ut pariatur amet deserunt do irure incididunt nostrud.',
	leadAnalysts: [],
	collabs: [analysts[2], analysts[4]],
	task: 'Aliquip sit duis veniam qui.',
	dueDate: new Date(),
	attachment: null,
	archiveStatus: false,
=======
	title: 'Task Test Object',
	description: 'Voluptate anim non amet cupidatat ut pariatur amet deserunt do irure incididunt nostrud.',
	progress: Progression.INPROGRESS,
	priority: Priority.HIGH,
	subtask: 'Nulla nisi consectetur ipsum ex proident.',
	analysts: [options.analysts[2], options.analysts[4]],
	task: 'Aliquip sit duis veniam qui.',
	dueDate: new Date(),
	attachment: null,
	archiveStatus: 0,
>>>>>>> 234a7b96... New system template, frontend layout and project structure changes (#12)
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
<<<<<<< HEAD
=======
/* End Testing Data */
>>>>>>> 234a7b96... New system template, frontend layout and project structure changes (#12)
