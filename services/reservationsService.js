const connection = require('../config/bdd');

function getAllReservations() {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM reservations';
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getReservationById(reservationId) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM reservations WHERE id_reservartion = ?';
        connection.query(sql, [reservationId], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results[0]);
        });
    });
}

function getReservationByStatus(reservationStatus) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM reservations WHERE reservation_status = ?';
        connection.query(sql, [reservationStatus], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getAverageCost() {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT AVG(total_cost) AS average_cost FROM reservations';
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results[0].average_cost);
        });
    });
}

function getReservationsAboveCost(totalCost) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM reservations WHERE total_cost >= ?';
        connection.query(sql, [totalCost], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getReservationsBelowCost(totalCost) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM reservations WHERE total_cost <= ?';
        connection.query(sql, [totalCost], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getReservationsByEscapeGameType(escapeGameType) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM reservations INNER JOIN escape_games ON escape_games.id_escape = reservations.id_escape WHERE escape_type = ?';
        connection.query(sql, [escapeGameType], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getBestClients() {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT clients.*, COUNT(reservations.id_reservation) AS reservation_count FROM clients LEFT JOIN reservations ON clients.id_client = reservations.id_client GROUP BY clients.id_client ORDER BY reservation_count DESC LIMIT 10';
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

module.exports = {
    getAllReservations,
    getReservationById,
    getReservationByStatus,
    getAverageCost,
    getReservationsByEscapeGameType,
    getBestClients,
    getReservationsAboveCost,
    getReservationsBelowCost,
};