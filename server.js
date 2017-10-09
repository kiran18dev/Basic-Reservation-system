var mongoUtil = require( './db/mongoUtil' );
var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var config = require('./config');
var routes = require('./routes');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoUtil.connectToServer( function( err ) {
  	var db = mongoUtil.getDb();
  	console.log("connected to server");
	app.use('/', routes);
});

/*
if (config.env === 'production') {
	// do something;
}
*/

app.listen(config.PORT, function () {
	console.log('server is running at http://localhost:'+config.PORT)
});
