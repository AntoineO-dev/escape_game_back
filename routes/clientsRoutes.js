const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');
const authController = require('../controllers/authController');


// GET /clients
router.get('/', (req, res) => {clientsController.getAllClients(req, res)});

//POST /clients
router.post ('/', authController.verifyToken, (req, res) => {clientsController.createClient(req, res)});

// GET /clients/reservation/:id_client
router.get('/reservation/:id_client', (req, res) => {clientsController.getReservationByClientId(req, res)});

// GET /clients/reservation/month/:month
router.get('/reservation/month/:month', (req, res) => {clientsController.getReservationByMonth(req, res)});

// GET /clients/reservation/year/:year
router.get('/reservation/year/:year', (req, res) => {clientsController.getReservationByYear(req, res)});

//GET /clients/reservationAbove/:total_cost
router.get('/reservationAbove/:total_cost', (req, res) => {clientsController.getReservationAbove(req, res)});

//GET /clients/reservationBelow/:total_cost
router.get('/reservationBelow/:total_cost', (req, res) => {clientsController.getReservationBelow(req, res)});

//GET /clients/reservation/escaperoom/:id_escape
router.get('/reservation/escaperoom/:id_escape', (req, res) => {clientsController.getReservationByEscapeRoom(req, res)});





// GET /clients/:id_client
router.get('/:id_client', (req, res) => {clientsController.getClientById(req, res)});


module.exports = router;
