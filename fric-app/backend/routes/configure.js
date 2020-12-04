/**
 * 
 */

const router = require('express').Router();
const Configuration = require('../models/configuration.model');

/**
 * 
 */
router.route('/').get(async (req, res) => {
	if (req.query) {
		if (!req.query.type || !req.query.id) {
			res.sendStatus(400);
			return;
		}

		await Configuration
			.findOne({
				type: req.query.type,
				_id: req.query.id,
			})
			.then(config => {
				if (config) res.status(200).json(config);
				else res.status(404).send('No configuration found.');
			})
			.catch(err => {
				console.log(err);
				res.status(500).json(err);
			});
	}
	else {
		await Configuration
			.find()
			.then(configs => {
				if (configs) res.status(200).json(configs);
				else res.status(404).send('No configurations found.');
			})
			.catch(err => {
				res.status(500).json(err);
				console.log(err);
			});
	}
});


router.route('/table').get(async (req, res) => {
	if (req.query && req.query.type) {
		Configuration
			.aggregate([
				{
					$match: {
						type: req.query.type,
					}
				},
				{
					$project: {
						_id: 1,
						value: 1,
					}
				},
			])
			.then(configs => {
				if (configs) res.status(200).json(configs);
				else res.status(404).send('No configurations found.');
			})
			.catch(err => {
				console.log(err);
				res.status(500).json(err);
			});
	} else res.sendStatus(400);
});


router.route('/new').post(async (req, res) => {
	if (req.body.params && req.body.params.type && req.body.params.value && req.body.params.description) {
		var exists = false;

		await Configuration
			.findOne({
				type: req.body.params.type,
				value: req.body.params.value,
			})
			.then(config => {
				if (config) {
					res.status(400).send('Insert failed. Configuration already exists.');
					exists = true;
				}
			})
			.catch(err => {
				res.status(500).json(err);
				console.log(err);
			});

		if (exists) return;
		const newConfig = new Configuration(req.body.params);

		await newConfig
			.save()
			.then(config => {
				if (config) res.status(201).json(config);
				else res.status(400).send('Insert Failed. Unknown Error.');
			})
			.catch(err => {
				res.status(500).json(err);
				console.log(err);
			});
	} else res.sendStatus(400);
});


router.route('/update').post(async (req, res) => {
	console.log(req.body.params); //TODO: remove test line in production
	if (req.body.params && req.body.params.id) {
		var document = null;
		var exists = false;

		await Configuration
			.findOne({ _id: req.body.params.id })
			.then(config => {
				if (config) {
					document = config;
					document.set(req.body.params);
					exists = true;
				} else res.status(404).send('No configuration found.');
			})
			.catch(err => {
				res.status(500).json(err);
				console.log(err);
			});

		if (!exists) return;
		
		await document
			.save()
			.then(result => {
				res.status(200).json(result);
				console.log(result);
			})
			.catch(err => {
				res.status(500).json(err);
				console.log(err);
			});
	} else res.sendStatus(400);
});


router.route('/delete').delete(async (req, res) => {
	if (req.body.params && req.body.params.type && req.body.params.value) {
		await Configuration
			.deleteMany({
				type: req.body.params.type,
				value: req.body.params.value,
			})
			.then(result => {
				if (result) res.status(200).json(result);
				else res.status(400).send('Delete Failed. Unknown Error.')
			})
			.catch(err => {
				res.status(500).json(err);
				console.log(err);
			});
	} else res.sendStatus(400);
});

module.exports = router;
