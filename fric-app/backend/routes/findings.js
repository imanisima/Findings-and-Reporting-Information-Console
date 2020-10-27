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

router.route('/').get(async (req, res) => {
	if (req.query.hasOwnProperty('id')) { // This block is for fetching one task by id
		const id = req.query.hostName; // '_id' to be requested from tasks collection
		
		await Finding
			.findOne({hostName: id})
			.then(finding => res.status(200).json(finding))
			.catch(err => res.status(400).json('Error: ' + err));
	}
	else if (req.query.hasOwnProperty('archived')) { // This block is for fetching one task by id
		const id = req.query.archived; // '_id' to be requested from tasks collection
		
		await Finding
			.find({ archived: id})
			.then(finding => res.status(200).json(finding))
			.catch(err => res.status(400).json('Error: ' + err));
	}
	
	else { 
		await Finding
			.find()
			.then(finding => res.json(finding))
			.catch(err => res.status(400).json('Error: ' + err));
	}
});

router.route('/add').post((req, res) => {
	
	var newFinding = {
		hostName: req.body.hostName,
		ipPort: req.body.ipPort,
		description: req.body.description,
		longDescription: req.body.longDescription,
		status: req.body.status,
		type: req.body.type,
		classification: req.body.classification,
		associations: req.body.associations,
		evidence: req.body.evidence,
		archived: req.body.archived,
		confidentiality: req.body.confidentiality,
		integrity: req.body.integrity,
		availabilty: req.body.availabilty,
		posture: req.body.posture,
		mBriefDescription:req.body.mBriefDescription,
		mLongDescription: req.body.mLongDescription,
		relevance: req.body.relevance,
		effectiveRating: req.body.effectiveRating
		
		//systemLevelImpact: obj.b()
	}
	newFinding = new Finding(newFinding);

	newFinding
		.save()
		.then(() => res.json('Finding Added'))
		.catch(err => res.status(400).json('Error: ' + err));
		
});
router.route('/names').get(async (req, res) => {
	await Finding
		.aggregate([
			{
				$match: {
					archived: false
				}
			},
			{
				$project: {
					name: 1,
				}
			}
		])
		.then(finding => res.status(200).json(finding))
		.catch(err => res.status(400).json('Error: ' + err));
});
router.route('/delete').post((req, res) => {

});

router.route('/update').put(async(req, res) => {
	if (req.body.params.hasOwnProperty('id')) {
		const id = req.body.params.id; // '_id' to be requested from tasks collection
		var doc = null; // Stores Document returned by findOne

		await Finding.findOne({ ipPort: id})
			.then(finding => {
				doc = finding;
				doc.set(req.body.params);
			})
			.catch(err => res.status(404).json('Error: ' + err));

		await doc
			.save() // This method provides validation
			.then(finding => res.status(200).json(finding))
			.catch(err => res.status(400).json('Error: ' + err));
	}
	else res.status(400).send();
});

const obj = {
	a: 2+3,
	b() { return this.a }
  };

module.exports = router;
