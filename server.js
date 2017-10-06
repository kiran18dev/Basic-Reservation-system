﻿var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var multer = require('multer')
var ObjectID = require('mongodb').ObjectID
//var query = require('url').parse(req.url,true).query;



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
	if (err) {
		throw err;
	}
	console.log("connected to server");
	app.get('/reservations', function (req, res) {
		db.collection('user').find().toArray(function (err, result) {
			if (err) {
				res.status(500).send("something failed!")
			}
			res.json(result)
		})
	})
	app.post('/reservation', function (req, res) {
		
		
		db.collection('user').insertOne(req.body, function (err, result) {
			if (err) {
				res.status(500).send("something failed!")
			}
			res.json(result)
		})
	})
	app.get('/reservation/:id', function (req, res) {
		var objectId = new ObjectID(req.params.id)
		var obj = { "_id": objectId }
		db.collection('user').find(obj).toArray(function (err, result) {
			if (err) {
				res.status(500).send("something failed!")
			}
			res.json(result)
		})
	})

});
app.listen(3333, function () {
	console.log('server is running at http://localhost:3333')
});