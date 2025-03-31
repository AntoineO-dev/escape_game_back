const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/paymentsController');

//GET /payments
router.get('/', paymentsController.getAllPayments);

//GET /payments/paymentsmethod/:payment_method
router.get('/paymentsmethod/:payment_method', paymentsController.getPaymentByMethod);

//GET /payments/above/:amount
router.get('/above/:amount', paymentsController.getPaymentAboveAmount);

//GET /payments/below/:amount
router.get('/below/:amount', paymentsController.getPaymentBelowAmount);

//GET /payments/total/month/:month/year/:year
router.get('/total/month/:month/year/:year', paymentsController.getTotalPaymentsByMonthAndYear);

//GET /payments/escapegame/:escape_type
router.get('/escapegame/:escape_type', paymentsController.getPaymentByEscapeGameType);

//GET /payments/total/:id_escape
router.get('/total/:id_escape', paymentsController.getTotalPaymentsByEscapeGame);


//GET /payments/:id
router.get('/:id', paymentsController.getPaymentById);

module.exports = router;