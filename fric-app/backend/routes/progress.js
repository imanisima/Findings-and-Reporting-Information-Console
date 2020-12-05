/**
 * 
 */

const router = require('express').Router();
const Progress = require('../models/progress.model'); // Mongoose model created from tasks collection
//const System = require('../models/system.model'); //System does not have a progress attribute yet
const Task = require('../models/task.model');
const Subtask = require('../models/subtask.model');

/**
 * 
 */
router.route('/').get(async (req, res) => {
	await axios.get('http://localhost:5000/tasks', {
		params: {}
	})
		.then(res => {

			for (var i = 0; i < res.data.length; i++) {
				//console.log(res.data[i])
				if (res.data[i].progress === "Complete") {
					completeTask = completeTask + 1;
					//console.log('Complete task',completeTask)
				}
				else {
					incompleteTask = incompleteTask + 1
					//console.log('incomplete',incompleteTask)
				}
			}
			console.log('Complete task', completeTask)
		})
		.catch(err => res.status(400).json('Error: ' + err));

	

});

module.exports = router;
