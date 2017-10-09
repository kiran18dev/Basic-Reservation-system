var mongoUtil = require( '../db/mongoUtil' );
var error500Handler = require('../utils/error500');
module.exports = function (req, res) {
	var db = mongoUtil.getDb();
	db.collection('user').find().toArray(function (err, result) {
		error500Handler(err,res);
		res.json(result)
	})
};