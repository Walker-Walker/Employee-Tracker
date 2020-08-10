var inquirer = require('inquirer');
const connection = require('./db/database');


connection.query(`SELECT * FROM employee`, [], (err, rows) => {
  if (err) {
    console.log(err)
    return;
  }

console.log(rows)
});

// SELECT * FROM employee
//     -> JOIN role ON (employee.role_id = role.id)
//     -> JOIN department ON (role.department_id = department.id);