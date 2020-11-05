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
			.findOne({
				_id: req.query.id,
				archived: false
			})
			.then(event => {
				if (event) res.status(200).json(event);
				else res.status(404).send('No event found.');
			})
			.catch(err => {
				res.status(404).json({ error: err });
				console.log(err);
			});
	}
	else {
		await Event
			.find()
			.then(events => {
				if (events) res.status(200).json(events);
				else res.status(404).send('No events found.');
			})
			.catch(err => {
				res.status(500).json({ error: err });
				console.log(err);
			})
	}
});


/**
 * 
 */
router.route('/new').post(async (req, res) => {
	if (req.body && req.body.params) {
		const document = new Event(req.body.params);

		await document
			.save()
			.then(event => {
				if (event) res.status(201).json(event);
				else res.status(400).send('Create event failed.');
			})
			.catch(err => {
				res.status(500).json({ error: err });
				console.log(err);
			});
	} else res.sendStatus(400);
});


/**
 * 
 */
router.route('/delete').delete(async (req, res) => {
	if (req.body && req.body.params && req.body.params.id) {
		await Event.deleteOne({_id: req.body.params.id})
			.then(result => {
				res.status(200).json(result);
			})
			.catch(err => {
				res.status(500).json({ error: err });
				console.log(err);
			})
	}
});


/**
 * 
 */
router.route('/update').put(async (req, res) => {
	if (req.body && req.body.params && req.body.params.id) {
		var document = null; // Stores Document returned by findOne

		await Event
			.findOne({ _id: req.body.params.id })
			.then(event => {
				if (event) {
					document = event;
					delete req.body.params.id;
					document.set(req.body.params);
				}
				else res.status(404).send('No event found.');
				
			})
			.catch(err => {
				res.status(500).json({ error: err });
				console.log(err);
			});

		await document
			.save() // This method provides validation
			.then(event => {
				if (event) res.status(200).json(event);
				else res.status(400).send('Event update failed.');
			})
			.catch(err => {
				res.status(500).json({ error: err });
				console.log(err);
			});
	} else res.status(400).json('No event provided.');
});


/**
 * 
 */
router.route('/summary').get(async (req, res) => {
	if (req.query && req.query.id) {
		await Event
			.findOne({
				_id: req.query.id,
				archived: false
			})
			.then(event => {
				if (event) res.status(200).json(event);
				else res.status(404).send('No event found.');
			})
			.catch(err => {
				res.status(500).json({ error: err });
				console.log(err);
			});

		//TODO: Fetch and send aggregated summary data for the given event
	} else res.status(400).send('No event provided.');
});

module.exports = router;
