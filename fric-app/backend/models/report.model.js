/**
 * 
 */

const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({

}, {
	timestamps: true,
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
