// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions =[
        {
            type: 'input',
            name: 'appName',
            message: 'What is the name of your app?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a short description of this project (what, why, and how).'
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be run to install dependencies?',
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to conduct tests?',
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage instructions.',
            default: 'npm start' //is this correct?
        },
        {
            type: 'input',
            name: 'collab',
            message: 'If a collab, how does one contribute to repo?',
            default: 'fork their repository and create a pull request'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function (data){
            fs.writeFile('./dist/readMe.md', generateMarkdown(data), function(err){
                if (err) {
                    console.error(err);
                }
                console.log('Success!')
            })
        })

}

// Function call to initialize app
init();
