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

router.route('/').get((req, res) => {
	System
		.find()
		.then(systems => res.json(systems))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	var newSystem = {

	}
	newSystem = new System(newSystem);

	newSystem
		.save()
		.then(() => res.json('System Added'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').post((req, res) => {

});

router.route('/update').post((req, res) => {

});

module.exports = router;
