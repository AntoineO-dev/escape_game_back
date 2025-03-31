const connection = require('../config/bdd');

function getAllClients() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM clients', (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

function getClientById(id_client) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM clients WHERE id_client = ?', [id_client], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

function getReservationByClientId(id_client) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM reservations WHERE id_client = ?', [id_client], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

function getReservationByMonth(month) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM reservations WHERE MONTH(reservation_date) = ?', [month], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}


function getReservationByYear(year) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM reservations WHERE YEAR(reservation_date) = ?', [year], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

function getReservationAbove(total_cost) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM reservations WHERE total_cost >= ?', [total_cost], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

function getReservationBelow(total_cost) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM reservations WHERE total_cost <= ?', [total_cost], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

function getReservationByEscapeRoom(id_escape) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM reservations WHERE id_escape = ?', [id_escape], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    getAllClients,
    getClientById,
    getReservationByClientId,
    getReservationByYear,
    getReservationAbove,
    getReservationBelow,
    getReservationByEscapeRoom,
    getReservationByMonth
};