var inquirer = require("inquirer");
const cTable = require("console.table");
const lib = require("./db/connection");
const { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment } = require("./db/connection");

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
            value: "add_a_department",
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
      {
        name:"add_a_department",
        type:"input",
        message:"Enter name of Department",
        when: (answers) => {
          return(answers.name == "add_a_department" ? true : false );
        }
      }
    ])
    .then((answers) => {
      console.log(answers.name);
      //where you will run other functions calls/methods to employee data//sql querys
      console.log(answers);
      switch (answers.name) {
        case "view_all_departments":
          return viewAllDepartments(), promptUser(); //function call;

        case "view_all_roles":
          return viewAllRoles(), promptUser(); // function call ;

        case "view_all_employees":
          return viewAllEmployees(), promptUser(); //function call ;

        case "add_a_department":
          return addDepartment(answers.add_a_department), promptUser(); // function call;

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
//opens another inquirer prompt for inputing department name, calling addDeparment with name inserted as an argument?
const addDepartmentPrompt = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter name of Department",
      },
    ])
    .then((answers) => {
      console.log(answers);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};
// list function declarations are function calls for connection js  for above function calls in switch case


promptUser();
// SELECT * FROM employee
//     -> JOIN role ON (employee.role_id = role.id)
//     -> JOIN department ON (role.department_id = department.id);
// return inquirer
// .prompt ([
//   {
//     type: "input",
//     name: "name",
//     message: "what is the department name?"
//   }

// ])
