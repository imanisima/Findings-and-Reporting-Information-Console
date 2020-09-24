/**
 * 
 */

const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
	
}, {
	timestamps: true,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
