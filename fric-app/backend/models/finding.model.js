/**
 * 
 */

const mongoose = require('mongoose');

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

	//SRS 68 Finding Impact
	//confidentiality
}, {
	timestamps: true,
})

const Finding = mongoose.model('Finding', findingSchema);

module.exports = Finding
