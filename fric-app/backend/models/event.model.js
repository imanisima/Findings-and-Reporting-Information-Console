/**
 * 
 */

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
	name: { type: String, required: true, },
	description: { type: String, required: false },
	type: { type: String, required: true },
	version: { type: Number, required: true },
	assessmentDate: { type: String, required: true }, //Date
	organization: { type: String, required: true },
	securityGuide: { type: String, required: true },
	classification: { type: String, required: true },
	declassified: { type: String, required: true }, //Date
	customer: { type: String, required: true }, //Date
	archived: { type: Boolean, required: true },
	team: { type: Array, required: true },
}, {
	timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
