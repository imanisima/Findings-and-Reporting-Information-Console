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
			console.log(event._id);
			res.status(200).cookie('event_id', JSON.stringify(event._id)).json(event._id);
		})
		.catch(err => res.status(404).json(err));
});

router.route('/login').post(async (req, res) => {
	console.log('logging in');
	await Analyst
		.findOne({'initials': req.body.params.user})
		.then(analyst => {
			res.status(200).cookie('user', analyst.initials).json('Logged In');
		})
		.catch(err => res.status(404).json(err).send());
});

router.route('/logout').post((req, res) => {
	console.log('logging out');
		res.clearCookie('user');
		res.status(200).json('Logged out');
});

module.exports = router;
