/**
 * 
 */

const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
	timestamp: { type: Date, required: true, },
	action: { type: String, required: true, },
	analyst: {
		type: Number,
		required: true,
		minLength: 2,
		maxLength: 3,
	},
}, {
	timestamps: true,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
