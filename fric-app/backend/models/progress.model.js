const mongoose = require('mongoose');
const { Progression, Classification } = require('../shared/EnumeratedTypes');

const eventSchema = new mongoose.Schema({
	completeSystem: { type: Number, required: true, },
	completeTask: { type: Number, required: true },
	completeSubtask: { type: Number, required: true, enum: EventType },
	incompleteSystem: { type: Number, required: true },
	IncompleteTask: { type: Number, required: true },
	incompleteSubtask: { type: Number, required: true },

}, {
	timestamps: true,
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;
