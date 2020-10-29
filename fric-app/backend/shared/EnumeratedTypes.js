/**
 * This file stores semi-enumerated types for use in form's selection fields.
 * Their associated values can also be passed as data for database queries.
 * 
 * Created by Marco Soto
 */

/**
 * Key is value passed into event type selection fields
 * Value is what is stored in the database for eventType field in events collection
 */
exports.EventType = [
	'CVPA',
	'CVI',
	'VOF',
]

/**
 * Key is value passed into progress selection fields
 * Value is what is stored in the database for progress field in tasks and subtasks collections.
 */
exports.Progression = [
	'Not Started',
	'Assigned',
	'Transferred',
	'In Progress',
	'Complete',
	'Not Applicable',
]

/**
 * Key is value passed into event type selection fields
 * Value is what is stored in the database for eventType field in events collection
 */
exports.Priority = [
	'Low',
	'Medium',
	'High',
]

exports.Classification = [
	'Top Secret',
	'Secret',
	'Confidential',
	'Classified',
	'Unclassified',
]
