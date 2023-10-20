//Required the necessary modules in order to create the prompt questions, 
//write to new files, and pass user answers into a README template.
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

//This function checks if user is actually enterting an answer in the app.
const validateAnswer = (answer) => {
    return answer.length < 1 ? "Please submit an answer." : true;
  };

// Array of questions for user input
const questions =[
        //Question for app name
        {
            type: 'input',
            name: 'appName',
            message: 'What is the name of your app?',
            //validate using function declared in global scope
            validate: (answer) => validateAnswer(answer)
        },
        // Question for description section.
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a short description of this project (what, why, and how).',
            validate: (answer) => validateAnswer(answer)
        },
            //Question for installation section
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be run to install dependencies?',
            //Per TA, we can use default answers since we are not yet knowledgable on certain sections.
            default: 'npm i'
        },
            //Question for usage section
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage instructions.',
            default: 'npm start'
        },
        //Question for licenses section
        {
            type: 'list',
            name: 'licenses',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        //Question for contributing section
        {
            type: 'input',
            name: 'collab',
            message: 'If a collab, how does one contribute to repo?',
            default: 'fork their repository and create a pull request'
        },
        //Question for tests section
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to conduct tests?',
            default: 'npm test'
        },
        //Question for credits section
        {
            type: 'input',
            name: 'credits',
            message: 'Please give credit to any third-party assets or collaborators.',
            default: 'N/A'
        },
        //Question for questions section, which will implement user's GitHub username.
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: (answer) => validateAnswer(answer)
        },
        //Question for questions section, which will implement user's email address.
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            // Using regular expression, this checks to ensure the format of the email contains non-whitespace characters,
            //  with an "@", more non-whitespace characters, a "." and more non-whitespace characters (eg: bbbb@ccc.com)
            validate: (answer) => {
                const validEmail = answer.match(/\S+@\S+\.\S+/);
                if (validEmail) {
                  return true;
                }
                return 'Please enter an email address.';
            }
        }
    ];

// This function initializes the app
function init() {
    inquirer
        .prompt(questions)
        .then(function (data){
            console.log(data);
            // writes a README file to the dist folder; calls generateMarkdown function to pass in data from that exported module.
            fs.writeFile('./dist/README.md', generateMarkdown(data), function(err){
                if (err) {
                    console.error(err);
                }
                console.log('Success!')
            })
        })

}

// Function call to initialize app
init();
