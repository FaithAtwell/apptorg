import bcrypt from 'bcrypt';
import connection from './db';

export const signup = (username, email, password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                reject(err);
                return; // Add return statement to exit the function
            }
            const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
            connection.query(sql, [username, email, hash], (err, results) => {
                if (err) {
                    reject(err);
                    return; // Add return statement to exit the function
                }
                // Check if results exist and have an insertId property
                if (results && results.insertId) {
                    resolve(results.insertId);
                } else {
                    reject(new Error('User signup failed'));
                }
            });
        });
    });
};

export const login = (username, password) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM users WHERE username = ?';
        connection.query(sql, [username], (err, results) => {
            if (err) {
                reject(err);
                return; // Add return statement to exit the function
            }
            if (results.length === 0) {
                reject(new Error('User not found'));
                return; // Add return statement to exit the function
            }
            bcrypt.compare(password, results[0].password, (err, res) => {
                if (err) {
                    reject(err);
                    return; // Add return statement to exit the function
                }
                if (res) {
                    resolve(results[0].id);
                } else {
                    reject(new Error('Incorrect password'));
                }
            });
        });
    });
};
