/**
 * 
 */

const router = require('express').Router();
const Event = require('../models/event.model');


/**
 * 
 */
router.route('/').get((req, res) => {
	if (req.body.params.hasOwnProperty('id')) {
		Event
			.findOne({_id: req.body.params.id})
			.then(event => res.status(200).json(event))
			.catch(err => res.status(404).json('Error: ' + err));
	}
	else {
		Event
			.find()
			.then(events => res.status(200).json(events))
			.catch(err => res.status(404).json('Error: ' + err));
	}
});


/**
 * 
 */
router.route('/new').post((req, res) => {
	const document = new Event(req.body.params);

	document
		.save()
		.then(event => res.status(201).json(event))
		.catch(err => res.status(400).json('Error: ' + err));
});


/**
 * 
 */
router.route('/delete').delete((req, res) => {
	//TODO: implement delete method
});


/**
 * 
 */
router.route('/update').put((req, res) => {
	//TODO: implement update method
});

module.exports = router;
