/**
 * 
 */

const mongoose = require('mongoose');

const findingSchema = new mongoose.Schema({
	
}, {
	timestamps: true,
})

const Finding = mongoose.model('Finding', findingSchema);

module.exports = Finding
