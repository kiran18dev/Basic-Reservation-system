module.exports = function(err, res) {
	if(err) {
		res.status(500).send("something failed!")
	}
};