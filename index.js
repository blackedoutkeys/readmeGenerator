//global variables

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// const api = require('./utils/githubapi.js');
const util = require('util');


// array of questions for user to enter answers
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
        name: "questions",
        message: "Please provide any and all questions or concerns for support"
    },
];


//function to write the README file
function writeToFile (fileName, data) {
    fs.writeFile (fileName, data, err => {
        if (err) {
            return console.log(err);
            }
            return console.log('Hooray! Your README file has been successfully created!');
    })
};
 
// function to initialize program
function init() {
    return inquirer.prompt(questions)
}
    


// function call to initialize program
init() 
.then(function(answers) {
    var file = answers.title.toLowerCase().split(" ").join("");
    fs.writeFile(file + ".md", generateMarkdown(answers), function(err){
        if (err){
            return console.log(err);
        }
    });
})
.catch(function(err){
    console.log(err);
});