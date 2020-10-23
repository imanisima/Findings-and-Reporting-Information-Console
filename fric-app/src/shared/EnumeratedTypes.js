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
export const EventType = {
	CVPA: 'CVPA',
	CVI: 'CVI',
	VOF: 'VOF',
}

/**
 * Key is value passed into progress selection fields
 * Value is what is stored in the database for progress field in tasks and subtasks collections.
 */
export const Progression = {
	NOTSTARTED: 'Not Started',
	ASSIGNED: 'Assigned',
	TRANSFERRED: 'Transferred',
	INPROGRESS: 'In Progress',
	COMPLETE: 'Complete',
	NOTAPPLICABLE: 'Not Applicable',
}

/**
 * Key is value passed into event type selection fields
 * Value is what is stored in the database for eventType field in events collection
 */
export const Priority = {
	LOW: 'Low',
	MED: 'Medium',
	HIGH: 'High',
}

export const EventClassification = {
	TOPSECRET: 'Top Secret',
	SECRET: 'Secret',
	CONFIDENTIAL: 'Confidential',
	CLASSIFIED: 'Classified',
	UNCLASSIFIED: 'Unclassified',
}

export const FindingStatus = {
	OPEN: 'Open',
	CLOSED: 'Closed'
}

export const FindingType = {
	CC: 'Credentials Complexity',
	MDC: 'Manufacturer Default Creds',
	LOA: 'Lack of Authentication',
	PTP: 'Plain Text Protocols',
	PTWL: 'Plain Text Web Login',
	E: 'Encryption',
	AB: 'Authentication Bypass',
	PS: 'Port Security',
	AC: 'Access Control',
	LP: 'Least Privilege',
	PE: 'Privilege Escalation',
	MP: 'Missing Patches',
	PS: 'Physical Security',
	ID: 'Information Disclosure'
}

export const FindingClassification = {
	VULNERABILITY: 'Vulnerability',
	INFORMATION: 'Information'
}
