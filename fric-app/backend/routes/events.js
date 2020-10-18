/**
 * 
 */

const router = require('express').Router();
const Event = require('../models/event.model');


/**
 * 
 */
router.route('/').get(async (req, res) => {
	if (req.body.params != null && req.body.params.hasOwnProperty('id')) {
		await Event
			.findOne({_id: req.body.params.id})
			.then(event => res.status(200).json(event))
			.catch(err => res.status(404).json('Error: ' + err));
	}
	else {
		await Event
			.find()
			.then(events => res.status(200).json(events))
			.catch(err => res.status(404).json('Error: ' + err));
	}
});


/**
 * 
 */
router.route('/new').post(async (req, res) => {
	if (req.body.hasOwnProperty('params')) {
		const document = new Event(req.body.params);

		await document
			.save()
			.then(event => res.status(201).json(event))
			.catch(err => res.status(400).json('Error: ' + err));
	} else res.status(200).json();
});


/**
 * 
 */
router.route('/delete').delete(async (req, res) => {
	//TODO: implement delete method
});


/**
 * 
 */
router.route('/update').put(async (req, res) => {
	if (req.body.params.hasOwnProperty('id')) {
		var document = null; // Stores Document returned by findOne

		await Event
			.findOne({ _id: req.body.params.id })
			.then(event => {
				document = event;
				document.set(req.body.params);
			})
			.catch(err => res.status(404).json('Error: ' + err));

		await document
			.save() // This method provides validation
			.then(event => res.status(200).json(event))
			.catch(err => res.status(400).json('Error: ' + err));
	} else res.status(400).send();
});

module.exports = router;
