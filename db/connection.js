const mysql = require('mysql2');

// create the connection to database

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: '',
    database: 'employees'
  });

  connection.connect(err => { 
    if (err) throw err;
  })
  module.exports = connection;