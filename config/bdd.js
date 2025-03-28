const mysql = require('mysql2');

// Création de la connexion à la base de données

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Cmoinounou5948&',
    database: 'escape_game',
    // port: 3306
});

// Vérifier l'état de la connexion à la base de données
connection.connect((err) => {
    if (err) {
        console.log('Error connecting to Db' + err.stack);
        return;
    }
    console.log('Connection établie à la BDD' + connection.threadId);
});

module.exports = connection;