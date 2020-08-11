const connection = require("./database");
// house all connection querys
class lib {
  // connection querys for user selections to
  viewAllDepartments() {
    // your code here
    connection.query(`SELECT * FROM department`, [], (err, rows) => {
      if (err) {
        console.log(err);
        return;
      } //log the data into the terminal
      console.table(rows);
    });
  }
  viewAllRoles() {
    connection.query(`SELECT * FROM role`, [], (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      console.table(rows);
    });
  }
  viewAllEmployees() {
    connection.query(`SELECT * FROM employee`, [], (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      console.table(rows);
    });
  }
  addDepartment() {
    
  }
}

module.exports = new lib();
