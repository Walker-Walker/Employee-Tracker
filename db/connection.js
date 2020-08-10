const connection = require('./database');
// house all connection querys 
class lib {
// connection querys for user selections to 
selectAllDepartments () {
    // your code here 
    //log the data into the terminal 
}

}

connection.query(`SELECT * FROM employee`, [], (err, rows) => {
  if (err) {
    console.log(err)
    return;
  }

console.log(rows)
});

module.exports = lib;