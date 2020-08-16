const connection = require("./connection");
// house all connection querys
class Lib {

  constructor(connection) {
    this.connection = connection;
  }
  // connection querys for user selections to
  viewAllDepartments() {
    // your code here
    
    return this.connection.promise().query(`SELECT id, name FROM department`);
    // connection.query(`SELECT id, name FROM department`, [], (err, rows) => {
    //   // //
    //   // if (err) {
    //   //   console.log(err);
    //   //   return;
    //   // } //log the data into the terminal
    //   // console.log("");
    //   // console.table(rows);
    // });
  }
  viewAllRoles() {
    // connection.query(
    //   `SELECT title, department.name, role.id, salary FROM role LEFT JOIN department ON role.department_id = department.id`,
    //   [],
    //   (err, rows) => {
    //     if (err) {
    //       console.log(err);
    //       return;
    //     }
    //     console.log("");
    //     console.table(rows);
    //   }
    // );

    return this.connection.promise().query(`SELECT title, department.name, role.id, salary FROM role LEFT JOIN department ON role.department_id = department.id`)
  }
  viewAllEmployees() {
    // connection.query(
    //   `SELECT * FROM employee JOIN role ON (employee.role_id = role.id) JOIN department ON (role.department_id = department.id)`,
    //   [],
    //   (err, rows) => {
    //     if (err) {
    //       console.log(err);
    //       return;
    //     }
    //     console.log("");
    //     console.table(rows);
    //   }
    // );

    return this.connection.promise().query(`SELECT * FROM employee JOIN role ON (employee.role_id = role.id) JOIN department ON (role.department_id = department.id)`)
  }
  addDepartment(department) {
    connection.query(
      `INSERT INTO department (name) VALUES (?)`,
      [department],
      (err, rows) => {
        if (err) {
          console.log(err);
          return;
        }
      }
    );

    // return this.connection.promise().query(`INSERT INTO department (name) VALUES ( ? )`)
  }

  addRole(title, salary, department_id) {
    console.log("title: " + title, "salary: " + salary);
    let idNumber = Math.floor(Math.random()*1000);
    //grab all departments and store them into a variable...
    // viewAllDepartments().then((rows) => {
    //   console.table(rows);
    // })
       
    //then run prompt...
    
    connection.query(
      `INSERT into role (title, salary, department_id) VALUES ( ? , ?, ? );`,
      [title, salary, department_id],
      (err, rows) => {
        if (err) {
          console.log(err);
          return;
        }
      }
    );
  }

  addEmployee(first_name, last_name, role_id, manager_id) {
    connnection.query(
      `INSERT into employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
      [first_name, last_name, role_id, manager_id],
      (err, rows) => {
        if (err) {
          console.log(err);
          return;
        }
      }
    );
  }
}

module.exports = new Lib(connection);

//sql put sql patch
