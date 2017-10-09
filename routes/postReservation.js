var mongoUtil = require( '../db/mongoUtil' );
var error500Handler = require('../utils/error500');
var error400Handler = require('../utils/error400');
module.exports = function (req, res) {
	var obj = req.body;
	if(!error400Handler(obj,res).isError) {
		var db = mongoUtil.getDb();
		db.collection('user').insertOne(req.body, function (err, result) {
			error500Handler(err,res);
			res.json(result)
		})
	}
};