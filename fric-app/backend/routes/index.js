/**
 * 
 */

const Analyst = require('../models/analyst.model');
const Finding = require('../models/finding.model');
const Subtask = require('../models/subtask.model');
const System = require('../models/system.model');
const Task = require('../models/task.model');
const router = require('express').Router();

router.route('/').get((req, res) => {
	res.json('ello govna!');
});

router.route('/summary').get(async (req, res) => {

	function handleQueryErr(err) {
		console.log(err);
		return null;
	}

	const tasks_complete_count = await Task.countDocuments({ progress: 'Complete', archived: false })
		.then(result => { return result; })
		.catch(handleQueryErr);

	const tasks_incomplete_count = await Task.countDocuments({ progress: { $not: { $eq: 'Complete' } }, archived: false })
		.then(result => { return result; })
		.catch(handleQueryErr);

	const tasks_archived_count = await Task.countDocuments({ archived: true })
		.then(result => { return result; })
		.catch(handleQueryErr);

	const subtasks_complete_count = await Subtask.countDocuments({ progress: 'Complete', archived: false })
		.then(result => { return result; })
		.catch(handleQueryErr);

	const subtasks_incomplete_count = await Subtask.countDocuments({ progress: { $not: { $eq: 'Complete' } }, archived: false })
		.then(result => { return result; })
		.catch(handleQueryErr);

	const subtasks_archived_count = await Subtask.countDocuments({ archived: true })
		.then(result => { return result; })
		.catch(handleQueryErr);

	const analysts_count = await Analyst.countDocuments()
		.then(result => { return result; })
		.catch(handleQueryErr);

	const systems_count = await System.countDocuments()
		.then(result => { return result; })
		.catch(handleQueryErr);

	const findings_active_count = await Finding.countDocuments({ archived: false })
		.then(result => { return result; })
		.catch(handleQueryErr);

	const findings_archived_count = await Finding.countDocuments({ archived: true })
		.then(result => { return result; })
		.catch(handleQueryErr);

	res.status(200).json({
		numAnalysts: analysts_count,
		numSystems: systems_count,
		task_stats: {
			complete: tasks_complete_count,
			incomplete: tasks_incomplete_count,
			archived: tasks_archived_count,
		},
		subtask_stats: {
			complete: subtasks_complete_count,
			incomplete: subtasks_incomplete_count,
			archived: subtasks_archived_count,
		},
		finding_stats: {
			active: findings_active_count,
			archived: findings_archived_count,
		},
	});
});

module.exports = router;
