/**
 * 
 */

const router = require('express').Router();
const Task = require('../models/task.model');

router.route('/').get(async (req, res) => {
	if (req.query.hasOwnProperty('id')) { // This block is for fetching one task by id
		const id = req.query.id; // '_id' to be requested from tasks collection
		
		await Task 
			.findOne({ _id: id})
			.then(tasks => {
				// console.log(tasks);
				res.status(200).json(tasks)
			})
			.catch(err => res.status(400).json('Error: ' + err));
	}
	else if (req.query.hasOwnProperty('table') && req.query.table === 'true') { // This block is for fetching all tasks shaped as table data
		await Task
			.aggregate([
				{
					$project: {
						id: "$_id",
						name: 1,
						system: 1,
						priority: 1,
						progress: 1,
						dueDate: 1,
						analysts: 1,
						noOfSubtasks: {
							$size: "$associations" //TODO: needs to be fixed with $lookup to get associated subtasks
						},
						noOfFindings: {
							$size: "$associations" //TODO: needs to be fixed with $lookup to get associated findings
						}
					}
				}
			])
			.then(tasks => res.status(200).json(tasks))
			.catch(err => res.status(400).json('Error: ' + err));
	}
	else { // This block is for fetching all tasks without params
		await Task
			.find()
			.then(tasks => res.status(200).json(tasks))
			.catch(err => res.status(400).json('Error: ' + err));
	}
});


router.route('/add').post(async (req, res) => {
	console.log(req.body);
	if (req.body.params != null) {
		// console.log(req.body.params);
		const newTask = req.body.params;

		await Task
			.create(newTask)
			.then(task => res.status(201).json(task))
			.catch(err => res.status(400).json('Error: ' + err));
	}
});


router.route('/delete').delete(async (req, res) => {
	console.log(req.body);
	if (req.body.params.hasOwnProperty('id')) {
		const id = req.body.params.id; // '_id' to be requested from tasks collection
		
		await Task
			.deleteMany()
			.then(tasks => {
				console.log(tasks);
				res.status(200).json(tasks)
			})
			.catch(err => res.status(404).json('Error: ' + err));
	}
});


router.route('/update').put(async (req, res) => {
	if (req.body.params.hasOwnProperty('id')) {
		const id = req.body.params.id; // '_id' to be requested from tasks collection
		var doc = null; // Stores Document returned by findOne

		await Task.findOne({ _id: id})
			.then(task => doc = task)
			.catch(err => res.status(404).json('Error: ' + err));

		await doc.save() // This method provides validation
			.then(task => res.status(200).json(task))
			.catch(err => res.status(400).json('Error: ' + err));
	}
	else res.status(400).send();
});

module.exports = router;
