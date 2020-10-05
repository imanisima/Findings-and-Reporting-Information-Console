/**
 * 
 */

const router = require('express').Router();
const Analyst = require('../models/analyst.model');

// Used to edit the response that will be sent to the requester.
var response = {
	status: '200',
	data: null,
}

router.route('/').get((req, res) => {
	Analyst
		.find()
		.then(analysts => res.json(analysts))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	var newAnalyst = {
		name: {
			first: req.body.fname,
			last: req.body.lname,
		},
		initial: req.body.initial,
		title: Array(req.body.title),
		role: Number(req.body.role),
	}
	newAnalyst = new Analyst(newAnalyst);

	newAnalyst
		.save()
		.then(() => res.json('Analyst Added'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').post((req, res) => {

});

router.route('/update').post((req, res) => {

});

module.exports = router;
