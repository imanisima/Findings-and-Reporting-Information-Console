/**
 * 
 */

const mongoose = require('mongoose');

const subtasksSchema = new mongoose.Schema({
	id: { type: Number, required: true },
	name: { type: String, required: true, },
	task: { type: String, required: true },
	analyst: { type: String, required: true },
	progress: { type: Number, required: true },
	findings: { type: String, required: false },
	dueDate: { type: Date, required: true },
}, {
	timestamps: true,
});

const Subtask = mongoose.model('Subtask', subtasksSchema);

module.exports = Subtask;