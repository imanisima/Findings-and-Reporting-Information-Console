/**
 * 
 */

const router = require('express').Router();
const Finding = require('../models/finding.model');

// Used to edit the response that will be sent to the requester.
var response = {
	status: '200',
	data: null,
}

router.route('/').get((req, res) => {
	Finding
		.find()
		.then(findings => res.json(findings))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	var newFinding = {
		
	}
	newFinding = new Finding(newFinding);

	newFinding
		.save()
		.then(() => res.json('Finding Added'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').post((req, res) => {

});

router.route('/update').post((req, res) => {

});

module.exports = router;
