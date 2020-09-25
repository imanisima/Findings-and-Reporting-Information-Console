/**
 * 
 */

const router = require('express').Router();
const Event = require('../models/event.model');

// Used to edit the response that will be sent to the requester.
var response = {
	status: '200',
	data: null,
}

router.route('/').get((req, res) => {
	Event
		.find()
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	var newEvent = {
		name: req.body.name,
		description: req.body.description,
		type: req.body.type,
		version: Number(req.body.version),
		assessmentDate: Date.parse(req.body.assessmentDate),
		organization: req.body.organization,
		securityGuide: req.body.securityGuide,
		classification: req.body.classification,
		declassified: Date.parse(req.body.declassified),
		customer: req.body.customer,
		archived: Boolean(req.body.archived),
		team: Array(req.body.team),
	}
	newEvent = new Event(newEvent);

	newEvent
		.save()
		.then(() => res.json('Event Added'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').post((req, res) => {
	
});

router.route('/update').post((req, res) => {

});

module.exports = router;
