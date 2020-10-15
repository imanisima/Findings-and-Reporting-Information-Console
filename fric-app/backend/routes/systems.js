/**
 * 
 */

const router = require('express').Router();
const System = require('../models/system.model');

// Used to edit the response that will be sent to the requester.
var response = {
	status: '200',
	data: null,
}

router.route('/').get(async (req, res) => {
	if (req.query.hasOwnProperty('id')) { // This block is for fetching one task by id
		const id = req.query.id; // '_id' to be requested from tasks collection
		
		await System
			.findOne({ name: id})
			.then(system => {
				// console.log(tasks);
				res.status(200).json(system)
			})
			.catch(err => res.status(400).json('Error: ' + err));
	}
	else if (req.query.hasOwnProperty('archived')) { // This block is for fetching one task by id
		const id = req.query.archived; // '_id' to be requested from tasks collection
		
		await System
			.find({ archived: id})
			.then(system => {
				// console.log(tasks);
				res.status(200).json(system)
			})
			.catch(err => res.status(400).json('Error: ' + err));
	}
	
	else { 
		await System
			.find()
			.then(systems => res.json(systems))
			.catch(err => res.status(400).json('Error: ' + err));
	}
});

router.route('/add').post((req, res) => {
	var newSystem = {
		name: req.body.name,
		description: req.body.description,
		location: req.body.location,
		router: req.body.router,
		switch: req.body.switch,
		room: req.body.room,
		testPlan: req.body.testPlan,
		archived: req.body.archived
	}
	newSystem = new System(newSystem);

	newSystem
		.save()
		.then(() => res.json('System Added'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').post((req, res) => {

});

router.route('/update').put(async (req, res) => {
	if (req.body.params.hasOwnProperty('id')) {
		const id = req.body.params.id; // '_id' to be requested from tasks collection
		var doc = null; // Stores Document returned by findOne

		await System.findOne({ name: id})
			.then(system => {
				doc = system;
				doc.set(req.body.params);
			})
			.catch(err => res.status(404).json('Error: ' + err));

		await doc
			.save() // This method provides validation
			.then(system => res.status(200).json(system))
			.catch(err => res.status(400).json('Error: ' + err));
	}
	else res.status(400).send();
});

module.exports = router;
