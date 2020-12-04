/**
 * 
 */

const router = require('express').Router();
const Report = require('../models/transaction.model');

// Used to edit the response that will be sent to the requester.
var response = {
	status: '200',
	data: null,
}

router.route('/').get((req, res) => {
	Report
		.find()
		.then(reports => res.json(reports))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/logo').get, (req, res) => {
	const buffer = fs.readFileSync("../shared/images/devcom-logo.jpg");
	res.send(buffer)
}

router.route('/add').post((req, res) => {
	var newReport = {

	}
	newReport = new Report(newReport);

	newReport
		.save()
		.then(() => res.json('Report Added'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').post((req, res) => {

});

router.route('/update').post((req, res) => {

});

module.exports = router;
