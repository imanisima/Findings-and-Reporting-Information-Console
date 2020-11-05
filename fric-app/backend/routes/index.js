/**
 * 
 */

const router = require('express').Router();
const Event = require('../models/event.model');
const Analyst = require('../models/analyst.model');

router.route('/').get(async (req, res) => {
	await Event
		.findOne({ 'archived': false })
		.then(event => {
			if (event) res.status(200).cookie('event_id', String(event._id)).send('Event cookie created.');
			else {
				res.clearCookie('event_id');
				res.status(404).send('No event found. Create cookie failed.');
			}
		})
		.catch(err => {
			res.status(500).json({ error: err });
			console.log(err);
		});
});

router.route('/login').post(async (req, res) => {
	console.log('logging in');
	if (req.body && req.body.params && req.body.params.user) {
		await Analyst
			.findOne({ 'initials': req.body.params.user })
			.then(analyst => {
				if (analyst) res.status(200).cookie('user', String(analyst.initials)).send('User cookie created.');
				else res.status(404).send('No analyst found. Create cookie failed.');
			})
			.catch(err => {
				res.status(500).json({ error: err });
				console.log(err);
			});
	} else res.status(400).send('No user given.');
});

router.route('/logout').post((req, res) => {
	console.log('logging out');
	res.clearCookie('user');
	res.status(200).send('Logged out');
});

module.exports = router;
