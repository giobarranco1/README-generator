// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// TODO: import the generateMarkdown function from utils/generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create a function to initialize app
function init() {
    //ask questions 
    inquirer
        .prompt(
            [{
                //project title input
                    type: 'input',
                    message: 'What is the title of the project?',
                    name: 'projectTitle',
                },
                {
                    //project description input
                    type: 'input',
                    message: 'What is the description of the project?',
                    name: 'projectDescription',
                },
                {
                    //project installation input
                    type: 'input',
                    message: 'What command should you run to install dependacies?',
                    name: 'installation',
                    default: 'npm install inquirer',
                },
                {
                    //project instructions input
                    type: 'input',
                    message: 'What are instructions for application?',
                    name: 'instructions',
                },
                {
                    //project collaborators input
                    type: 'input',
                    message: 'Who collaborated on this project?',
                    name: 'collaboration',
                },
                {
                    //project third parties input
                    type: 'input',
                    message: 'List third-party assests that require attribution:',
                    name: 'thirdParties',
                },
                {//project tutorials input
                    type: 'input',
                    message: 'Include links of tutorials that assisted you in completing project:',
                    name: 'tutorials',
                },
                {
                    //project test input
                    type: 'input',
                    message: 'Write a test-section for your project:',
                    name: 'test',
                },
                {
                    // email input
                    type: 'input',
                    message: 'What is your email?',
                    name: 'email',
                },
                {
                    //github user name input
                    type: 'input',
                    message: 'What is your github username?',
                    name: 'githubUserName',
                },
                {
                    //phone number input
                    type: 'input',
                    message: 'What is your phone number?',
                    name: 'phoneNumber',
                },

            ]
        ).then(response => {
            console.log("User input is ", response);
            //convert the response in  readme friendly format 
            const data = generateMarkdown(response);
            console.log("converted data is ", data);
            //generate the readme file using fs.writeFile()
            fs.writeFile('README.md', data, (err) =>
                err ? console.error(err) : console.log('Success!')
            );
        })

}

// Function call to initialize app
init();