const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservationsController');

//GET /reservations
router.get('/', reservationsController.getAllReservations);

//GET /reservations/average_cost
router.get('/average_cost', reservationsController.getAverageCost);

//GET /reservations/above/:total_cost
router.get('/above/:total_cost', reservationsController.getReservationsAboveCost);

//GET /reservations/below/:total_cost
router.get('/below/:total_cost', reservationsController.getReservationsBelowCost);

//GET /reservations/:reservation_status
router.get('/:reservation_status', reservationsController.getReservationByStatus);


//GET /reservations/escape_game/type/:type
router.get('/escape_game/type/:type', reservationsController.getReservationsByEscapeGameType);

//GET /reservations/clients/best
router.get('/clients/best', reservationsController.getBestClients);


//GET /reservations/:id
router.get('/:id', reservationsController.getReservationById);

module.exports = router;