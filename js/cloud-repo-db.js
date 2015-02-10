/**
 * Created by mtomeczek on 04.02.15.
 */
var boshDirectorSchema = require('../models/bosh-director-schema.js');
var boshReleaseSchema = require('../models/bosh-release-schema.js');
module.exports = function (mongoose) {
	var models = {
		BoshDirector: mongoose.model('BoshDirector', boshDirectorSchema),
		BoshRelease: mongoose.model('BoshRelease', boshReleaseSchema)
	};
	return models;
}