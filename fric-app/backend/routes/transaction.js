/**
 * 
 */

const router = require('express').Router();
const Transaction = require('../models/transaction.model');

// Used to edit the response that will be sent to the requester.
var response = {
	status: '200',
	data: null,
}

router.route('/').get((req, res) => {
	Transaction
		.find()
		.then(transactions => res.json(transactions))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	var newTransaction = {

	}
	newTransaction = new Transaction(newTransaction);

	newTransaction
		.save()
		.then(() => res.json('Transaction Added'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').post((req, res) => {

});

router.route('/update').post((req, res) => {

});

module.exports = router;
