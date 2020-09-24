/**
 * 
 */

const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
	name: { type: String, required: true, },
	type: { type: String, required: true, },
	categorizations: { type: Array, required: true, },
	leadAnalyst: {
		type: String,
		required: false,
		minLength: 2,
		maxLength: 3,
	},
	leadTitles: { type: String, required: true, },
	eventName: { type: Array, required: true, },
	summary: { type: Array, required: true, },
	findings: { type: Array, required: true, },
}, {
	timestamps: true,
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
