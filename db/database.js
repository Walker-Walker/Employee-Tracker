const mysql = require('mysql2');

// create the connection to database

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'NuBYkruYj7sMea!',
    database: 'employees'
  });
  
  module.exports = connection;