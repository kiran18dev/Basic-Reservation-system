var mongoUtil = require( './db/mongoUtil' );
var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
const PORT = process.env.PORT || 3333;

const routes = require('./routes');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoUtil.connectToServer( function( err ) {
  	var db = mongoUtil.getDb();
  	console.log("connected to server");
	app.use('/', routes);
});

app.listen(PORT, function () {
	console.log('server is running at http://localhost:'+PORT)
});
