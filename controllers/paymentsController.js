const { get } = require('../routes/clientsRoutes');
const paymentsService = require('../services/paymentsService');

async function getAllPayments(req, res) {
    try {
        const payments = await paymentsService.getAllPayments();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


async function getPaymentById(req, res) {
    const paymentId = req.params.id;
    try {
        const payment = await paymentsService.getPaymentById(paymentId);
        if (payment) {
            res.status(200).json(payment);
        } else {
            res.status(404).json({ error: 'Payment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getPaymentByMethod(req, res) {
    const paymentMethod = req.params.payment_method;
    try {
        const payment = await paymentsService.getPaymentByMethod(paymentMethod);
        if (payment) {
            res.status(200).json(payment);
        } else {
            res.status(404).json({ error: 'Payment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getPaymentAboveAmount(req, res) {
    const amount = req.params.amount;
    try {
        const payments = await paymentsService.getPaymentAboveAmount(amount);
        if (payments.length > 0) {
            res.status(200).json(payments);
        } else {
            res.status(404).json({ error: 'No payments found above the specified amount' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getPaymentBelowAmount(req, res) {
    const amount = req.params.amount;
    try {
        const payments = await paymentsService.getPaymentBelowAmount(amount);
        if (payments.length > 0) {
            res.status(200).json(payments);
        } else {
            res.status(404).json({ error: 'No payments found below the specified amount' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getTotalPaymentsByMonthAndYear(req, res) {
    const month = req.params.month;
    const year = req.params.year;
    try {
        const totalPayments = await paymentsService.getTotalPaymentsByMonthAndYear(month, year);
        if (totalPayments.length > 0) {
            res.status(200).json(totalPayments);
        } else {
            res.status(404).json({ error: 'No payments found for the specified month and year' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getPaymentByEscapeGameType(req, res) {
    const escapeType = req.params.escape_type;
    try {
        const payments = await paymentsService.getPaymentByEscapeGameType(escapeType);
        if (payments.length > 0) {
            res.status(200).json(payments);
        } else {
            res.status(404).json({ error: 'No payments found for the specified escape game type' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getTotalPaymentsByEscapeGame(req, res) {
    const escapeId = req.params.id_escape;
    try {
        const totalPayments = await paymentsService.getTotalPaymentsByEscapeGame(escapeId);
        if (totalPayments.length > 0) {
            res.status(200).json(totalPayments);
        } else {
            res.status(404).json({ error: 'No payments found for the specified escape game' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getAllPayments,
    getPaymentById,
    getPaymentByMethod,
    getPaymentAboveAmount,
    getPaymentBelowAmount,
    getTotalPaymentsByMonthAndYear,
    getPaymentByEscapeGameType,
    getTotalPaymentsByEscapeGame,
  
  
};