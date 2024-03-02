const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'BlindAF@2021',
    database: 'appointmentorg_db'
});

module.exports = connection;
