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

export const FindingImpactConfidentiality = {
	L: 'Low',
	M: 'Medium',
	H: 'High',
	I: 'Information'
}

export const FindingImpactIntegrity = {
	L: 'Low',
	M: 'Medium',
	H: 'High',
	I: 'Information'
}

export const FindingImpactAvailability = {
	L: 'Low',
	M: 'Medium',
	H: 'High',
	I: 'Information'
}

/**
 * AnalystPosture, might have to move these because they are editable
 */
export const AnalystPosture = {
	I: 'Insider',
	IN: 'Insider-nearsider',
	O: 'Outsider',
	N: 'Nearsider',
	NO: "Nearsider-outsider"
}

/**
 * ThreatRelevance, might have to move these because they are editable
 */
export const ThreatRelevance = {
	C: 'Confirmed',
	E: 'Expected',
	A: 'Anticipated',
	PP: 'Predicted Possible'
}

/**
 * EffectivenessRating, might have to move these because they are editable
 */
export const EffectivenessRating = {
	VH: 'Very High (10)',
	H: 'High (7-9)',
	M: 'Moderate (4-6)',
	L: 'Low (1-3)',
	VL: 'Very low (0)'
}

/**
 * ImpactLevel, might have to move these because they are editable
 */
export const ImpactLevel = {
	VH: 'VH',
	H: 'H',
	M: 'M',
	L: 'L',
	VL: 'VL'
}

/**
 * SeverityCategoryCode, might have to move these because they are editable
 */
export const SeverityCategoryCode = {
	I: 'I',
	II: 'II',
	III:  'III',
}