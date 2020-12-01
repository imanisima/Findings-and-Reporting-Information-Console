/* eslint-disable no-dupe-keys */

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

	function handleAggErr(err) {
		console.log(err);
		return null;
	}

	const analystSummary = await Analyst.countDocuments()
		.then(result => { return result; })
		.catch(handleAggErr);

	const findingSummary = await Finding.countDocuments()
		.then(result => { return result; })
		.catch(handleAggErr);

	const systemSummary = await System.countDocuments()
		.then(result => { return result; })
		.catch(handleAggErr);

	const taskSummary = await Task.aggregate([
		{
			$facet: {
				progress: [
					{
						$group: {
							_id: '$progress',
							total: { $sum: 1 }
						}
					}
				],
				archived: [
					{ $match: { archived: true } },
					{ $count: 'total' }
				]
			}
		}
	])
		.then(result => { return result[0]; })
		.catch(handleAggErr);

	const subtaskSummary = await Subtask.aggregate([
		{
			$facet: {
				progress: [
					{
						$group: {
							_id: '$progress',
							total: { $sum: 1 }
						}
					}
				],
				archived: [
					{ $match: { archived: true } },
					{ $count: 'total' } 
				]
			}
		}
	])
		.then(result => { return result[0]; })
		.catch(handleAggErr);

	res.status(200).json({
		analysts: analystSummary,
		tasks: taskSummary,
		subtasks: subtaskSummary,
		findings: findingSummary,
		systems: systemSummary,
	});
});

module.exports = router;
