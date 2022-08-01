const inquirer = require('inquirer');

class Employee {
    

    getName() {

        inquirer.prompt({
            type: 'text',
            name: 'name',
            message: "What is this employee's name?"
        })
        .then(({ name }) => {
            this.employee.name = name;

            this.getId();
        });
    }

    getId() {

        inquirer.prompt({
            type: 'text',
            name: 'employeeId',
            message: `What is ${this.name}'s id number?`
        })
        .then(({ employeeId }) => {
            this.employee.id = employeeId;

            this.getEmail();
        })
    }

    getEmail() {
        inquirer.prompt({
            type: 'text',
            name: 'employeeEmail',
            message: `What is ${this.name}'s email?`
        })
        .then(({ employeeEmail }) => {
            this.employee.email = employeeEmail;

            this.getRole();
        })
    }

    getRole() {
        inquirer.prompt({
            type: 'list',
            name: 'employeeRole',
            message: `What is ${this.name}'s role at the company?`,
            choices: ['Engineer','Manager','Intern']
        })
        .then(({ employeeRole }) => {
            this.employee.role = employeeRole;

            switch (employeeRole) {
                case 'Engineer':
                    Engineer();
                    break;
                case 'Manager':
                    Manager();
                    break;
                case 'Intern':
                    Intern();
                    break;
            }
        })
    }
}

module.exports = Employee;