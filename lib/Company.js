const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');
const Employee = require('./Employee');

function Company() {

    this.employee;

    Company.prototype.startCompany = function() {
        inquirer
            .prompt({
                type: "text",
                name: "name",
                message: "What is your employee's name?"
            })
            .then(({ name })=> {
                this.employee = new Employee(name);
            });
    }
}

module.exports = Company;