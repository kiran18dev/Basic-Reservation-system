var mongoUtil = require( '../db/mongoUtil' );
var error500Handler = require('../utils/error500');
var ObjectID = require('mongodb').ObjectID;

module.exports = function (req, res) {
	var db = mongoUtil.getDb();
	var objectId = new ObjectID(req.params.id)
	var obj = { "_id": objectId }
	db.collection('user').find(obj).toArray(function (err, result) {
		error500Handler(err,res);
		res.json(result)
	})
};