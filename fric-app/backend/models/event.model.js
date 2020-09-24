/**
 * 
 */

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
	name: { type: String, required: true, },
	description: { type: String, required: false },
	type: { type: String, required: true },
	version: { type: Number, required: true },
	assesmentDate: { type: Date, required: true },
	organization: { type: String, required: true },
	securityGuide: { type: String, required: true },
	classification: { type: String, required: true },
	declassified: { type: Date, required: true },
	customer: { type: Date, required: true },
	archived: { type: Boolean, required: true },
	team: { type: Array, required: true },
}, {
	timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
