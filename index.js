const fs = require('fs');
const inquirer = require('inquirer');

const selectEmployee = () => {
    return inquirer
        .prompt ([
            {
                type: "list",
                message: "What kind of employee would you like to input?",
                name: "employee",
                choices: ["Employee","Manager","Engineer","Intern"] 
            }
        ]);
}

selectEmployee();