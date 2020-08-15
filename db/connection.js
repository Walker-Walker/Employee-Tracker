const connection = require("./database");
// house all connection querys
class lib {
  // connection querys for user selections to
  viewAllDepartments() {
    // your code here
    connection.query(`SELECT id, name FROM department`, [], (err, rows) => {
      if (err) {
        console.log(err);
        return;
      } //log the data into the terminal
      console.log("");
      console.table(rows);
    });
  }
  viewAllRoles() {
    connection.query(`SELECT title, department.id, department.name,   role.id, salary FROM role JOIN department ON (role.department_id = department.id)`, [], (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("");
      console.table(rows);
    });
  }
  viewAllEmployees() {
    connection.query(`SELECT * FROM employee JOIN role ON (employee.role_id = role.id) JOIN department ON (role.department_id = department.id)`, [], (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("");
      console.table(rows);
    });
  }
  addDepartment(department) {
    connection.query(`INSERT INTO department (name) VALUES (?)`,[department], (err, rows) => {
        if (err) {
          console.log(err);
          return;
        }
    } )
    
  }
  addRole(title, salary){
    connection.query(`INSERT INTO role (title, salary) VALUES(?, ?)`,[title, salary], (err, rows) => {
      if(err) {
        console.log(err);
        return;
      }
    })
  }
}

module.exports = new lib();
