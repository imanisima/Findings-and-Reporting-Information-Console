/**
 * 
 */

const mongoose = require('mongoose');

const systemSchema = new mongoose.Schema({

}, {
	timestamps: true,
});

const System = mongoose.model('System', systemSchema);

module.exports = System;
