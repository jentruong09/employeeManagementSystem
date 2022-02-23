// Import and require mysql2
const mysql = require('mysql2');
const fs = require('fs');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const { add } = require('lodash');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'rootroot',
    database: 'company_db'
  },
  console.table(`Connected to the company_db database.`)
);


// Starting Prompt -- look back at this to name all the following functions -> make changes here if any functions get changed
const startOption = () => {
    inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employees', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', "Update Employee's Manager", "View Employee's By Manager", 'Quit'],
            name: 'start'
        })
        .then((answer) => {
            switch(answer.start) {
                case 'View All Employees':
                    viewAllEmployees();
                break;
                case 'Add Employees':
                    addEmployees();
                break;
                case 'Update Employee Role':
                    updateEmployeeRole();
                break;
                case 'View All Roles':
                    viewAllRoles();
                break;
                case 'Add Role':
                    addRole();
                break;
                case 'View All Departments':
                    viewAllDepartments();
                break;
                case 'Add Department':
                    addDepartment();
                break;
                case "Update Employee's Manager":
                    updateEmployeeManager();
                break;
                case "View Employee's By Manager":
                    viewEmployeeByManager();
                break;
                // db.end to end connection
                case 'Quit':
                    db.end()
                    console.table('You have ended your session. Have a great day!')
                break;
            }
        })
};


// To view all Employees
const viewAllEmployees = () => {
    db.query("SELECT employee.id, employee.first_name , employee.last_name, department_role.title, department.department_name , department_role.salary , employee.manager_id FROM employee JOIN department_role ON employee.role_id = department_role.id JOIN department ON department_role.department_id = department.id;", (err, result) => {
        if (err) {
            console.table(err);
        }
        console.table(result);
        startOption();
    })
}

// To add Employee
const addEmployees = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the employee's first name?",
                name: 'first_name',
            },
            {
                type: 'input',
                message: "What is the employee's last name?",
                name: 'last_name',
            },
            {
                type: 'list',
                message: "What is the employee's role? (Choices 'Lead Engineer', 'Salesperson', 'Accountant', 'Junior Accountant', 'Paralegal', 'Lawyer', 'Senior Accountant', 'Sales Manager', 'Human Resource Manager', 'Human Resource Coordinator', 'Software Engineer', 'QA Engineer')",
                choices: ['1','2','3','4','5','6','7','8','9','10','11','12'],
                name: 'role_id',
            },
            {
                type: 'list',
                message: "What is the employee's manager (by employee_id)?",
                choices: ['1', '2', '3', '4', '5', '6', '7,', '8', '9', '10', '11', '12'],
                name: 'manager_id',
            }
        ])
        .then((answer) => {
            // title might need to be swapped with role_id -- needs to be role_id
            // const role_id = (choice) => {
            //     if (choice.choices === 'Lead Engineer') {
            //         role_id = 1
            //     } if (choice.choices === 'Salesperson') {
            //         role_id = 2
            //     }
            // }
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [answer.first_name, answer.last_name, answer.role_id , answer.manager_id], (err, result) => {
                if (err) {
                    console.table(err);
                }
                console.table('New Employee Added Sucessfully');
                startOption();
            })
        })
}

// To update Employee Roles 
const updateEmployeeRole = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Which employee would you like to update? (Please enter by employee id.)',
                choices: ['1', '2', '3', '4', '5', '6', '7,', '8', '9', '10', '11', '12'],
                name: 'id'
            },
            {
                type: 'list',
                message: 'What is their new role?',
                choices: ['1', '2', '3', '4', '5', '6', '7,', '8', '9', '10', '11', '12'],
                name: 'role_id'
            }
        ])
        .then((answer) => {
            db.query(`UPDATE employee SET role_id = ? WHERE id = ?`, [answer.role_id, answer.id], (err, result) => {
                if(err) {
                    console.table(err);
                }
                console.table('Emplyee Role has updated successfully')
                startOption();
            })
        })
}


// To view all roles
const viewAllRoles = () => {
    db.query("SELECT * FROM company_db.department_role", (err, result) => {
        if (err) {
            console.table(err);
        }
        console.table(result);
        startOption();
    })
}


// To add Role
const addRole = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Which role would you like to add?',
                name: 'title'
            },
            {
                type: 'list',
                message: 'What is the department in which this role belongs to? Choices(1 - Engineering, 2 - Finance, 3 - Legal, 4 - Sales, 5 - HR)',
                choices: ['1', '2', '3', '4', '5'],
                name: 'department_id'
            },
            {
                type: 'input',
                message: 'What is the salary for this new role?',
                name: 'salary'
            }
        ])
        .then((answer) => {
            db.query(`INSERT INTO department_role SET title = ?, department_id = ?, salary = ?`, [answer.title, answer.department_id, answer.salary], (err, result) => {
                if(err) {
                    console.table(err);
                }
                console.table('Role has been added successfully')
                startOption();
            })
        })
}

// To View all Departments
const viewAllDepartments = () => {
    db.query("SELECT * FROM company_db.department", (err, result) => {
        if (err) {
            console.table(err);
        }
        console.table(result);
        startOption();
    })
}


// To add a Department 
const addDepartment = () => {
    inquirer
        .prompt({
            type: 'input',
            message: 'What is the name of the department you would like to add?',
            name: 'department_name'
        })
        .then((answer) => {
            db.query(`INSERT INTO department SET department_name = ?`, [answer.department_name], (err, result) => {
                if(err){
                    console.table(err);
                }
                console.table('Department has been added sucessfully')
                startOption();
            })
        })
}


// Update Employee's Managers
const updateEmployeeManager = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Which employee would you like to update thier manager? Choices(3 - Hailee Caffrey, 4 - Simon Lee, 5 - Jack McKay, 6 - Kevin Steinfeld, 9 - Jackson Darling, 10 - Dean Sloan, 12 - Sarah Daniels, 13 - Fal Simmons)',
                choices: ['3', '4', '5', '6', '9', '10', '12', '13'],
                name: 'id'
            },
            {
                type: 'list',
                message: 'Who would you like to change their manager to? Choices(1 - Ben Smith, 2 - Elizabeth Porter, 7 - Samuel Gomez, 8 - Rose Goo, 11 - Leah Lewis)',
                choices: ['1', '2', '7', '8', '11'],
                name: 'manager_id'
            }
        ])
        .then((answer) => {
            db.query(`UPDATE employee SET manager_id = ? WHERE id = ?`, [answer.manager_id, answer.id], (err, result) => {
                if(err){
                    console.table(err);
                }
                console.table('Their manager has been updated.')
                startOption();
            })
        })
}

// View Employees By Manager 
const viewEmployeeByManager = () => {
    inquirer
        .prompt({
            type: 'list',
            message: "Which manager's team would you like to see? Choices(1 - Ben Smith, 2 - Elizabeth Porter, 7 - Samuel Gomez, 8 - Rose Goo, 11 - Leah Lewis)",
            choices: ['1', '2', '7', '8', '11'],
            name: 'manager_id'
        })
        .then((answer) => {
            db.query(`SELECT first_name, last_name FROM employee WHERE manager_id = ?`, [answer.manager_id], (err, result) => {
                if (err) {
                    console.table(err);
                }
                console.table(result);
                startOption();
            })
        })
}

// To call the startOption Questions
function init() {
    console.table('You have entered the Employee Management System');
    startOption();
}

init();