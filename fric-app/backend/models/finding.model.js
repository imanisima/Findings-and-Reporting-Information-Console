/**
 * 
 */

const mongoose = require('mongoose');
const { FindingStatus, FindingClassification, FindingType, Confidentiality, Posture, ThreatRelevance } = require('../shared/EnumeratedTypes');

const findingSchema = new mongoose.Schema({
	//SRS 66
	hostName: { type: String, required: true, },
	ipPort: { type: String, required: true, },
	description: { type: String, required: true, },
	longDescription: { type: String, required: false, },
	status: { type: String, required: true, enum: FindingStatus },
	type: { type: String, required: true, enum: FindingType },
	classification: { type: String, required: true, enum: FindingClassification },
	associations: { type: Array, required: false, },
	evidence: { type: String, required: true, },
	archived: { type: Boolean, required: true, },
	confidentiality: { type: String, required: true, enum: Confidentiality},
	integrity: { type: String, required: true, enum: Confidentiality},
	availability: { type: String, required: true, enum: Confidentiality},
	posture:  { type: String, required: true, enum: Posture},
	mBriefDescription: { type: String, required: true},
	mLongDescription: { type: String, required: true},
	relevance:  { type: String, required: true, enum: ThreatRelevance},
	effectiveRating:  { type: Number, required: true},


	//SRS 68 Finding Impact
	//confidentiality
}, {
	timestamps: true,
});



var method = FindingSLI.prototype;

function FindingSLI(confidentiality, integrity, availability) {
	this._confidentiality = confidentiality;
	this._integrity = integrity;
	this._availability = availability;
}

method.getConfidentiality = function() {
    return this._confidentiality;
}
method.getIntegrity = function() {
    return this._integrity;
}
method.getAvailability = function() {
    return this._availability;
};



var method = Impact.prototype;

function Impact(description, level, score) {
	this._description = description;
	this._level = level;
	this._score = score;
}

method.getDescription = function() {
    return this._description;
}
method.getLevel = function() {
    return this._level;
}
method.getScore = function() {
    return this._score;
};
var method = Mitigation.prototype;

function Mitigation(LDescription,BDescription) {
	this._LDescription = LDescription;
	this._BDescription = BDescription;
}

method.getLDescription = function() {
    return this._LDescription;
}
method.getBDescription = function() {
    return this._BDescription;
};
var method = Severity.prototype;

function Severity(SCalScore,VulSev, QVulSev, SCat) {
	this._SCalScore = SCalScore;
	this._VulSev = VulSev;
	this._QVulSev = QVulSev;
	this._SCat = SCat;
}

method.getSCalScore = function() {
    return this._SCalScore;
}
method.getVulSev = function() {
    return this._VulSev;
}
method.getQVulSev = function() {
    return this._QVulSev;
}
method.getSCat = function() {
    return this._SCat;
};

const Finding = mongoose.model('Finding', findingSchema);
//module.exports = Severity;
//module.exports = FindingSLI;
//module.exports = Impact;
//module.exports = Mitigation;
module.exports = Finding
