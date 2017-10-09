var routes = require('express').Router();
var mongoUtil = require( '../db/mongoUtil' );
var error500Handler = require('../utils/error500');
var getAllReservations = require('./getAllReservations');
var getReservationById = require('./getReservationById');
var postReservation = require('./postReservation');

routes.get('/reservations', getAllReservations);
routes.post('/reservation', postReservation);
routes.get('/reservation/:id', getReservationById)

module.exports = routes;