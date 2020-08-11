var inquirer = require("inquirer");
const cTable = require('console.table');
const lib = require('./db/connection');
const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "name",
        message: "Please choose one of the following ",
        choices: [
          {
            name: "View all Departments",
            value: "view_all_departments",
          },
          {
            name: "View all Roles",
            value: "view_all_roles",
          },
          {
            name: "View all Employees",
            value: "view_all_employees",
          },
          {
            name: "Add a Department",
            value: "add_an_Department",
          },
          {
            name: "Add a Role",
            value: "add_a_role",
          },
          {
            name: "Add an Employee",
            value: "add_an_employee",
          },
          {
            name: "Update an Employee role",
            value: "update_an_employee_role",
          },
          {
            name: "exit",
            value: "exit",
          },
        ],
      },
    ])
    .then((answers) => {
      // console.log(answers.name);
      //where you will run other functions calls/methods to employee data//sql querys
    
      switch (answers.name) {
        case "view_all_departments":
          return selectAllDepts();//function call;
          
        case "view_all_roles":
          return; // function call ;

        case "view_all_employees":
          return; //function call ;

        case "add_a_department":
          return; // function call;

        case "add_a_role":
          return; //function call;

        case "add_an_employee":
          return; //function call;

        case "update_an_employee_role":
          return; //function call;

        case "exit":
          return exit();
      }
    })
    .catch((error) => {
      if (error) {
        console.log("error" + error);
      }
    });
};

// list function declarations are function calls for connection js  for above function calls in switch case 
function selectAllDepts () {
  //display this through terminal lib.selectAllDepartments()
  lib.selectAllDepartments()

}

promptUser();
// SELECT * FROM employee
//     -> JOIN role ON (employee.role_id = role.id)
//     -> JOIN department ON (role.department_id = department.id);
