const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');

function Company() {
    
    this.employee;

    Company.prototype.initializeCompany = function() {

        inquirer
            .prompt({
                type: "text",
                name: "name",
                message: "What is your employee's name?"
            },
            { 
                type:"text",
                name: "employeeId",
                message: "What is your employee's ID number?"
            },
            {
                type: "text",
                name: "employeeEmail",
                message: "What is your employee's email?"
            })
            .then(({ name, employeeId, employeeEmail })=> {
                console.log(name, employeeId, employeeEmail);
                this.employee = new Employee(name, employeeId, employeeEmail);

                this.getRole();
            });
    }

    Company.prototype.getRole = function() {
        inquirer.prompt({
            type: 'list',
            name: 'employeeRole',
            message: `What is this employee's role at the company?`,
            choices: ['Engineer','Manager','Intern']
        })
        .then(({ employeeRole }) => {
            this.employee.role = employeeRole;

            switch (employeeRole) {
                case 'Engineer':
                    this.Engineer();
                    break;
                case 'Manager':
                    this.Manager();
                    break;
                case 'Intern':
                    this.Intern();
                    break;
            }
        })
    }
}

module.exports = Company;