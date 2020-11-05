/**
 * 
 */

const router = require('express').Router();
const Event = require('../models/event.model');


/**
 * 
 */
router.route('/').get(async (req, res) => {
	if (req.query && req.query.id) {
		await Event
			.findOne({_id: req.query.id})
			.then(event => res.status(200).json(event))
			.catch(err => res.status(404).json('Error: ' + err));
	} else res.sendStatus(400);
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
			.catch(err => res.status(400).json('Error: bruh ' + err));
	} else res.status(400).json();
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


/**
 * 
 */
router.route('/summary').get(async (req, res) => {
	console.log(req.query);
	if (req.query && req.query.id) {
		await Event
			.findOne({ _id: req.query.id })
			.then(event => res.status(200).json(event))
			.catch(err => {
				console.log(err);
				res.status(404).json('Error: ' + err);
			});

		//TODO: Fetch and send aggregated summary data for the given event
	} else res.status(400).json('No event provided.').send();
});

module.exports = router;
