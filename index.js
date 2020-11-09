const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown');
const axios = require('axios');


// array of questions for user
const questions = [{
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a brief description of your project"
    },
    {
        type: "list",
        name: "badge",
        message: "Choose from the following badges",
        choices: ['MIT', 'Apache', 'IBM', 'Perl']
    },
    {
        type: "input",
        name: "installation",
        message: "Are there any installation instructions required for this project to function?"
    },
    {
        type: "input",
        name: "contribution",
        message: "Please list any contribution guidelines"
    },
    {
        type: "input",
        name: "test",
        message: "Please list any test instructions"
    },
    {
        type: "input",
        name: "license",
        message: "Please provide a license for the application.",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your Github username to link"
    },
    {
        type: "input",
        name: "Questions or comments",
        message: "Please provide any and all questions or concerns for support"
    },
];

//Inquirer to generate user questions
inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, ' '));
});

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();