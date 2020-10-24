/**
 * 
 */

const mongoose = require('mongoose');

const analystSchema = new mongoose.Schema({
	name: { type: Object, required: true, },
	initial: {
		type: String,
		required: true,
		minLength: 2,
		maxLength: 3,
	},
	title: { type: Array, required: true },
	role: { type: Number, required: true },
}, {
	timestamps: true,
});

const Analyst = mongoose.model('Analyst', analystSchema);

module.exports = Analyst;
