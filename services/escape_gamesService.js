const connection = require('../config/bdd');

function getAllEscapeGames() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM escape_games', (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getEscapeGameById(id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM escape_games WHERE id_escape = ?', [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results[0]);
        });
    });
}

function getAvailableEscapeGames() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM escape_games WHERE disponibility = 1', (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getEscapeGameByNumberOfPlayers(Number_of_players) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM escape_games WHERE Number_of_players = ?', [Number_of_players], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getEscapeGameByPriceAbove(price) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM escape_games WHERE price >= ?', [price], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getEscapeGameByPriceBelow(price) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM escape_games WHERE price <= ?', [price], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getEscapeGameByStatus(status) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM escape_games WHERE status = ?', [status], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

module.exports = {
    getAllEscapeGames,
    getEscapeGameById,
    getAvailableEscapeGames,
    getEscapeGameByNumberOfPlayers,
    getEscapeGameByPriceAbove,
    getEscapeGameByPriceBelow,
    getEscapeGameByStatus
  
};