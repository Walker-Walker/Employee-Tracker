var inquirer = require("inquirer");
const cTable = require("console.table");
const lib = require("./db/database");
// const {
//   viewAllDepartments,
//   viewAllRoles,
//   viewAllEmployees,
//   addDepartment,
//   addRole,
//   addEmployee,
// } = require("./db/database");

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "mainPrompt",
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
        name: "add_a_department",
        type: "input",
        message: "Enter name of Department",
        when: (answers) => {
          return answers.mainPrompt == "add_a_department" ? true : false;
        },
      },
      {
        name: "add_a_role_title",
        type: "input",
        message: "Enter name of Role",
        when: (answers) => {
          return answers.mainPrompt == "add_a_role" ? true : false;
        },
      },
      {
      name: "add_a_role_salary",
      type: "input",
      message: "Enter Salary",
      when: (answers) => {
        return answers.mainPrompt == "add_a_role" ? true : false;
      }
    },
  
    // {
    //   name: "add_a_role_department_id",
    //   type: "input",
    //   message: "Enter department id",
    //   when: (answers) => {
    //     return answers.mainPrompt == "add_a_role" ? true: false;
    //   }
    // },
    {
      name: 'add_an_employee_first_name',
      type: 'input',
      message: "Enter employee's first name",
      when: (answers) => {
        return answers.mainPrompt == "add_an_employee" ? true: false;
      }
    },
    {
      name: 'add_an_employee_last_name',
      type: 'input',
      message: "Enter employee's last name",
      when: (answers) => {
        return answers.mainPrompt == "add_an_employee" ? true: false;
      }
    },
    {
      name:'add_employee_manager_id',
      type: 'input',
      message: "Enter employee's manager id",
      when: (answers) => {
        return answers.mainPrompt == "add_an_employee" ? true: false;

      }
    },
    {
      name: 'add_employee_role_id',
      type: 'input',
      message: "Enter employee's role id",
      when: (answers) => {
        return answers.mainPrompt == "add_an_employee" ? true: false;
      }
    }
    ])
    .then((answers) => {
      console.log(answers.mainPrompt);
      //where you will run other functions calls/methods to employee data//sql querys
      console.log(answers);
      switch (answers.mainPrompt) {
        case "view_all_departments":
          return viewDepartments() 

        case "view_all_roles":
          return viewRoles()

        case "view_all_employees":
          return viewEmployees() //function call ;

        case "add_a_department":
          return addADepartment(answers.add_a_department) // function call;

        case "add_a_role":
          return addRole(answers.add_a_role_title, answers.add_a_role_salary,answers.add_a_role_department_id), promptUser();

        case "add_an_employee":
          return addEmployee(answers.add_an_employee_first_name, answers.add_an_employee_last_name, answers.add_employee_manager_id, answers.add_employee_role_id ), promptUser();//function call;

        case "update_an_employee_role":
          return; //function call;

        case "exit":
          return endProgram();
      }
    }).then(() => {
      promptUser();
    })
    .catch((error) => {
      if (error) {
        console.log("error" + error);
      }
    });
};

function viewDepartments () {
  lib.viewAllDepartments().then(([rows]) =>  {
    console.log("");  
    console.table(rows);
  })
}
function viewRoles() {
  lib.viewAllRoles().then(([rows]) => {
    console.log("");
    console.table(rows);
  }) 
}

function viewEmployees() {
  lib.viewAllEmployees().then(([rows]) => {
    console.log("");
    console.table(rows);
  })
}

function addADepartment() {
  lib.addDepartment();
}

function endProgram() {
  console.log(" Press Control C to end Program");
}
//opens another inquirer prompt for inputing department name, calling addDeparment with name inserted as an argument?
// const addDepartmentPrompt = () => {
//   return inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "Enter name of Department",
//       },
//     ])
//     .then((answers) => {
//       console.log(answers);
//     })
//     .catch((err) => {
//       if (err) {
//         console.log(err);
//       }
//     });
// };
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
