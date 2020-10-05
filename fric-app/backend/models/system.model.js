/**
 * 
 */

const mongoose = require('mongoose');

const systemSchema = new mongoose.Schema({
	name: { type: String, required: true, },
	description: { type: String, required: false, },
	routers: { type: Array, required: true, },
	switches: { type: Array, required: true, },
	rooms: { type: Array, required: false, },
	testPlan: { type: String, required: true, },
	archived: { type: Boolean, required: true, },
	event: { type: Number, required: true, }, // Stores the _id of the active Event the system is associated with
}, {
	timestamps: true,
});

const System = mongoose.model('System', systemSchema);

module.exports = System;
