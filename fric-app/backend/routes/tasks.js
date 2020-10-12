/**
 * 
 */

const router = require('express').Router();
const Task = require('../models/task.model');

router.route('/').get((req, res) => {
	//TODO: fetch tasks
	//TODO: handle request params
	console.log('\n\n----------------------------------------\n\n')
	console.log('tasks/');
	// console.log(req.query);
	// console.log(res);

	if (req.query.hasOwnProperty('id')) { // This block is for fetching one task by id
		console.log(req.query)
		const id = req.query.id;
		Task 
			.findOne({ _id: id})
			.then(tasks => {
				console.log(tasks);
				res.status(200).json(tasks)
			})
			.catch(err => res.status(400).json('Error: ' + err));
	}
	else if (req.query.hasOwnProperty('table') && req.query.table === 'true') { // This block is for fetching all tasks shaped as table data
		console.log(req.query)
		Task
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
			.then(tasks => {
				res.status(200).json(tasks);
			})
			.catch(err => res.status(400).json('Error: ' + err));
	}
	else { // This block is for fetching all tasks without params
		Task 
			.find()
			.then(tasks => {
				res.status(200).json(tasks);
			})
			.catch(err => res.status(400).json('Error: ' + err));
	}
	
	
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
