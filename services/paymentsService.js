const connection = require('../config/bdd');

function getAllPayments() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM payments', (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getPaymentById(paymentId) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM payments WHERE id_payment = ?', [paymentId], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results[0]);
        });
    });
}

function getPaymentByMethod(paymentMethod) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM payments WHERE payment_method = ?', [paymentMethod], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results[0]);
        });
    });
}

function getPaymentAboveAmount(amount) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM payments WHERE amount >= ?', [amount], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getPaymentBelowAmount(amount) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM payments WHERE amount <= ?', [amount], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getTotalPaymentsByMonthAndYear(month, year) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT SUM(amount) AS total FROM payments WHERE MONTH(payment_date) = ? AND YEAR(payment_date) = ?', [month, year], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results[0].total);
        });
    });
}

function getPaymentByEscapeGameType(escape_type) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM payments INNER JOIN pay ON pay.id_payment = payments.id_payment INNER JOIN reservations ON reservations.id_reservation = pay.id_reservation INNER JOIN escape_games ON escape_games.id_escape = reservations.id_escape  WHERE escape_type = ?', [escape_type], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results[0]);
        });
    });
}

function getTotalPaymentsByEscapeGame(escapeId) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT SUM(amount) AS total FROM payments INNER JOIN pay ON pay.id_payment = payments.id_payment INNER JOIN reservations ON reservations.id_reservation = pay.id_reservation INNER JOIN escape_games ON escape_games.id_escape = reservations.id_escape WHERE escape_games.id_escape = ?', [escapeId], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results[0].total);
        });
    });
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