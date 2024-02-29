// dbConfig.js

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    email: 'your_email',
    password: 'your_password',
    database: 'your_database_name'
});

module.exports = connection;
