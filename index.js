//global variables

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// const api = require('./utils/githubapi.js');
const util = require('util');


// array of questions for user to enter answers
const questions = [
    {
        type: "input",
        name: "contributors",
        message: "Welcome to the README generator! Please enter the names for all contributors on the project."
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a brief description of your project."
    },
    {
        type: "list",
        name: "license",
        message: "Choose an option regarding licensure for your project.",
        choices: [
            "Apache",
            "MIT",
            "IBM",
            "Perl"
        ]
    },
    {
        type: "input",
        name: "installation",
        message: "Are there any installation instructions required for this project to function?"
    },
    {
        type: "input",
        name: "test",
        message: "Please list any test instructions:"
    },
    {
        type: "input",
        name: "email",
        message: "Please provide an email for the contributo:",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your Github username to link:"
    },
    {
        type: "input",
        name: "questions",
        message: "Please provide any and all questions or concerns for support:"
    },
];


// UI VARIABLES
var userInterface = new inquirer.ui.BottomBar();
userInterface.log.write("          WELCOME TO THE README GENERATOR          ");


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