/**
 * 
 */

const mongoose = require('mongoose');

const configurationSchema = new mongoose.Schema({
	type: { type: String, required: true, },
	value: { type: String, required: true, },
	description: { type: String, required: false },
}, {
	timestamps: true,
});

const Configuration = mongoose.model('Configuration', configurationSchema);

module.exports = Configuration;
