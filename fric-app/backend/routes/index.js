
// const react = require('react');
// const render = require('react-dom').render;
const router = require('express').Router();

router.route('/').get((req, res) => {
	res.json('ello govna!');
});

module.exports = router;
