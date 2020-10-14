/**
 * 
 */

const router = require('express').Router();
const Task = require('../models/task.model'); // Mongoose model created from tasks collection

/**
 * 
 */
router.route('/').get(async (req, res) => {
	if (req.query.hasOwnProperty('id')) { // This block is for fetching one task by id
		await Task 
			.findOne({ _id: req.query.id})
			.then(task => res.status(200).json(task))
			.catch(err => res.status(404).json('Error: ' + err));
	}
	else { // This block is for fetching all tasks without params
		await Task
			.find()
			.then(tasks => res.status(200).json(tasks))
			.catch(err => res.status(400).json('Error: ' + err));
	}
});


/**
 * 
 */
router.route('/table').get(async (req, res) => {
	await Task
		.aggregate([
			{
				$match: {
					archived: false
				}
			},
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
});


/**
 * 
 */
router.route('/new').post(async (req, res) => {
	if (req.body.params != null) {
		const document = new Task(req.body.params);

		await document
			.save()
			.then(task => res.status(201).json(task))
			.catch(err => {console.log(err);res.status(400).json('Error: ' + err)});
	}
});


/**
 * 
 */
router.route('/delete').delete(async (req, res) => {
	//TODO: implement delete request
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

		// await Task.findOneAndDelete()
		// 	.then(msg => {})
		// 	.catch(err => res.status(400).send());
	}
});


/**
 * 
 */
router.route('/update').put(async (req, res) => {
	console.log(req.body.params);
	if (req.body.params.hasOwnProperty('id')) {
		const id = req.body.params.id; // '_id' to be requested from tasks collection
		var document = null; // Stores Document returned by findOne

		await Task
			.findOne({ _id: id })
			.then(task => {
				document = task;
				document.set(req.body.params);
			})
			.catch(err => res.status(404).json('Error: ' + err));

		await document
			.save() // This method provides validation
			.then(task => res.status(200).json(task))
			.catch(err => {
				console.log(err);
				res.status(400).json('Error: ' + err)
			});

		// await Task.updateOne({ _id: id })
		// 	.then(task => {})
		// 	.catch(err => res.status(400).send());
	}
	else res.status(400).send();
});


/**
 * 
 */
router.route('/archive').put(async (req, res) => {
	if (req.body.params.hasOwnProperty('id') && req.body.params.id instanceof Array) {
		await Task.updateMany(
			{
				_id: {
					$in: req.body.params.id
				}
			},
			{
				archived: true
			}
		)
			.then(result => res.status(200).json(result))
			.catch(err => res.status(404).json());
	} else res.status(400).json();
});

module.exports = router;