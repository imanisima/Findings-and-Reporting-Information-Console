/**
 * 
 */

const mongoose = require('mongoose');

const subtasksSchema = new mongoose.Schema({
	name: { type: String, required: true, },
	description: {type: String, required: false, }, //TODO: change to required in production
	progress: { type: String, required: true, },
	dueDate: { type: Date, required: true, },
	ownerTask: { type: String, required: false }, //TODO: change to required in production
	associations: { type: Array, required: true, },
	analysts: { type: Array, required: true, },
	collaborators: { type: Array, required: true, },
	attachment: { type: String, required: false, },
	archived: { type: Boolean, required: true, },
}, {
	timestamps: true,
});

const Subtask = mongoose.model('Subtask', subtasksSchema);

module.exports = Subtask;