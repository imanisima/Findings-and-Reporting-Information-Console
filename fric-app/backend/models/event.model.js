/**
 * 
 */

const mongoose = require('mongoose');
const { EventType, Classification } = require('../shared/EnumeratedTypes');

const eventSchema = new mongoose.Schema({
	name: { type: String, required: true, },
	description: { type: String, required: true },
	type: { type: String, required: true, enum: EventType },
	version: { type: String, required: true },
	assessed: { type: Date, required: true },
	organization: { type: String, required: true },
	securityGuide: { type: String, required: true },
	classification: { type: String, required: true, enum: Classification },
	declassified: { type: Date, required: true },
	customer: { type: String, required: true },
	archived: { type: Boolean, required: true },
	team: { type: Array, required: true },
}, {
	timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
