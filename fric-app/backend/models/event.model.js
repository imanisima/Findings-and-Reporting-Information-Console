/**
 * 
 */

const mongoose = require('mongoose');
const { EventType, Classification } = require('../shared/EnumeratedTypes');

const eventSchema = new mongoose.Schema({
	name: { type: String, required: true, },
	description: { type: String, required: false }, //TODO: set required to true in production
	type: { type: String, required: false }, //TODO: set required to true in production
	version: { type: String, required: true },
	derivedFrom: { type: String, required: false }, //TODO: set required to true in production
	assessed: { type: Date, required: true },
	declassified: { type: Date, required: true },
	organization: { type: String, required: false }, //TODO: set required to true in production
	securityGuide: { type: String, required: false }, //TODO: set required to true in production
	classification: { type: String, required: false }, //TODO: set required to true in production
	customer: { type: String, required: false }, //TODO: set required to true in production
	archived: { type: Boolean, required: true },
	team: { type: Array, required: true },
}, {
	timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
