/**
 * Created by mtomeczek on 04.02.15.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cloudrepo");
var cloudRepoDb = require('cloud-repo-db')(mongoose);

/*
 var boshDirector = new cloudRepoDb.BoshDirector({guid: 'asdf', description: 'description'});
 boshDirector.save();
 */

router.get('/', function (req, res, next) {
	cloudRepoDb.BoshDirector.find({}, function (err, directors) {
		res.send(JSON.stringify(directors, undefined, 2));
	});

});
router.post("/", function (req, res) {
	var directorGuid = req.body.guid;
	var directorDescription = req.body.description;
	var director = new cloudRepoDb.BoshDirector({guid: directorGuid, description: directorDescription});
	director.save(function (err) {
		if (err) {
			res.send(err);
		}
		else {
			res.json("Director created " + director._id);
		}
	});
});

router.delete("/:director_guid", function (req, res) {
	cloudRepoDb.BoshDirector.findOneAndRemove({guid: req.params.director_guid}, function (err) {
		if (err) {
			res.send(err);
		}
		else {
			res.send("Director " + req.params.director_guid + " removed!");
		}
	})

});

module.exports = router;