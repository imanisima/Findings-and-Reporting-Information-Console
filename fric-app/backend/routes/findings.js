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
		system: req.body.system,
		task: req.body.task,
		subtask: req.body.task,
		archived: req.body.archived,
		relatedFindings: req.body.relatedFindings,
		confidentiality: req.body.confidentiality,
		integrity: req.body.integrity,
		availability: req.body.availability,
		analyst: req.body.analyst,
		collaborator: req.body.collaborator,
		posture: req.body.posture,
		mBriefDescription:req.body.mBriefDescription,
		mLongDescription: req.body.mLongDescription,
		relevance: req.body.relevance,
		effectiveRating: req.body.effectiveRating,
		impactDescription: req.body.impactDescription,
		impactLevel: req.body.impactLevel,
		sevCatCode: req.body.sevCatCode,
		sevCatScore: req.body.sevCatScore=score(req.body.sevCatCode),//I dont grab from form
		fConfidentiality: req.body.fConfidentiality=getRealVal(req.body.fConfidentiality,req.body.confidentiality ),//I dont grab from form
		fIntegrity:req.body.fIntegrity= getRealVal(req.body.fIntegrity,req.body.integrity ),//I dont grab from form
		fAvailability: req.body.fAvailability=getRealVal(req.body.fAvailability,req.body.availability),//I dont grab from form
		impactScore: req.body.impactScore=impactScore(req.body.fConfidentiality,req.body.fIntegrity, req.body.fAvailability ),//I dont grab from form
		vulSeverity:req.body.vulSeverity= Vs(req.body.sevCatScore,req.body.impactScore, req.body.effectiveRating),//I dont grab from form
		qVs: req.body.qVs=qVs(req.body.vulSeverity),//I dont grab from form
		likelihood: req.body.likelihood=likelihood(req.body.impactScore,req.body.relevance, req.body.qVs),//I dont grab from form
		risk: req.body.risk =risk(req.body.impactScore, req.body.likelihood, req.body.impactLevel)//I dont grab from form

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

function score(id){
	if(id == "I")return "10";
	if(id == "II")return "7";
	return "4";
  };
  function Vs(catScore, impactScore, cm){
	var val =(catScore* impactScore * cm)/10;
	return val;
  };
  function qVs(id){
	if(id <= 100 && id >=95) return "Very High";
	if(id < 95 && id >=80) return "High";
	if(id < 80 && id >=20) return "Moderate";
	if(id < 20 && id >=5) return "Low";
	if(id < 5 && id >=0) return "Very Low";
	return "Info";
  };
  function risk(iS, l, lev){
	if(iS ==0) return "Info";
	switch (l) {
		case "Very High":
			if(lev=="VL")
				return "Very Low";
			else if(lev=="L")
				return "Low";
			else if(lev=="M")
				return "Moderate";
			else if(lev=="H")
				return "High";
			else if(lev=="VH")
				return "Very High";
		case "High":
			if(lev=="VL")
				return "Very Low";
			else if(lev=="L")
				return "Low";
			else if(lev=="M")
				return "Moderate";
			else if(lev=="H")
				return "High";
			else if(lev=="VH")
				return "Very High";
		case "Moderate":
			if(lev=="VL")
				return "Very Low";
			else if(lev=="L")
				return "Low";
			else if(lev=="M")
				return "Moderate";
			else if(lev=="H")
				return "Moderate";
			else if(lev=="VH")
				return "High";
		case "Low":
			if(lev=="VL")
				return "Very Low";
			else if(lev=="L")
				return "Low";
			else if(lev=="M")
				return "Low";
			else if(lev=="H")
				return "Low";
			else if(lev=="VH")
				return "Moderate";
		case "Very Low":
			if(lev=="VL")
				return "Very Low";
			else if(lev=="L")
				return "Very Low";
			else if(lev=="M")
				return "Low";
			else if(lev=="H")
				return "Low";
			else if(lev=="VH")
				return "Low";
		default:
		  return "Info";
	  }

  };
  function getRealVal(check, cia){
	if(check.includes("Y")) return cia;
	return "X";
	
  };
  function likelihood(iS, r, qVs){
	if(iS ==0) return "Info";
	switch (r) {
		case "Confirmed":
			if(qVs=="Very Low"){
				return "Very Low";
			}else if(qVs=="Low")
				return "Low";
			else if(qVs=="Moderate")
				return "Moderate";
			else if(qVs=="High")
				return "High";
			else if(qVs=="Very High")
				return "Very High";
		case "Expected":
			if(qVs=="Very Low")
				return "Very Low";
			else if(qVs=="Low")
				return "Low";
			else if(qVs=="Moderate")
				return "Moderate";
			else if(qVs=="High")
				return "High";
			else if(qVs=="Very High")
				return "Very High";
		case "Anticipated":
			if(qVs=="Very Low")
				return "Very Low";
			else if(qVs=="Low")
				return "Low";
			else if(qVs=="Moderate")
				return "Moderate";
			else if(qVs=="High")
				return "Moderate";
			else if(qVs=="Very High")
				return "High";
		case "Predicted":
			if(qVs=="Very Low")
				return "Very Low";
			else if(qVs=="Low")
				return "Low";
			else if(qVs=="Moderate")
				return "Low";
			else if(qVs=="High")
				return "Low";
			else if(qVs=="Very High")
				return "Moderate";
		case "Possible":
			if(qVs=="Very Low")
				return "Very Low";
			else if(qVs=="Low")
				return "Very Low";
			else if(qVs=="Moderate")
				return "Low";
			else if(qVs=="High")
				return "Low";
			else if(qVs=="Very High")
				return "Low";
		default:
		  return "Info";
	  }

	
  };
  function impactScore(c, i, a){
	var level = c.charAt(0)+i.charAt(0)+a.charAt(0);
	var amountH =0;
	var amountM =0;
	var amountL =0;


	for (i = 0; i < level.length; i++) {
		if(level.charAt(i)=="H") amountH=amountH+1;
		if(level.charAt(i)=="M") amountM=amountM+1;
		if(level.charAt(i)=="L") amountL++;
	}
	if(amountH ==3) return 10;
	if(amountH ==2) return 9;
	if(amountH ==1 ) return 8;
	if(amountM == 3) return 7;
	if(amountM == 2) return 6;
	if(amountM == 1) return 5;
	if(amountL == 3) return 4;
	if(amountL == 2) return 3;
	if(amountL == 2) return 2;
	return 0;
  };
module.exports = router;
