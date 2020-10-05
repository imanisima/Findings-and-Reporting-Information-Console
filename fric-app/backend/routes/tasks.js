/**
 * 
 */

const router = require('express').Router();
const Task = require('../models/transaction.model');

// Used to edit the response that will be sent to the requester.
var response = {
	status: '200',
	data: null,
}

router.route('/').get((req, res) => {
	Task
		.find()
		.then(tasks => res.json(tasks))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	var newTask = {

	}
	newTask = new Task(newTask);

	newTask
		.save()
		.then(() => res.json('Task Added'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').post((req, res) => {

});

router.route('/update').post((req, res) => {

});

module.exports = router;
