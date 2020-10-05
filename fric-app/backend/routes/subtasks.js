/**
 * 
 */

const router = require('express').Router();
const Subtask = require('../models/subtask.model');

router.route('/').get((req, res) => {
	Subtask
		.find()
		.then(subtasks => res.json(subtasks))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	var newSubtask = {
		title: req.body.title,
		task: req.body.task,
		description: req.body.description,
		initials: req.body.initials,
		progress: Number(req.body.progress),
		date: Date.parse(req.body.dueDate),
	}
	newSubtask = new Subtask(newSubtask);

	newSubtask
		.save()
		.then(() => res.json('Subtask Added'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').post((req, res) => {

});

router.route('/update').post((req, res) => {

});

module.exports = router;