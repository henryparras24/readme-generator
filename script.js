// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input 
// description, installation instructions, usage information, contribution guidelines, and test instructions
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installing instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What contribution guidelines are there?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Please give us testing instructions.',
    },
  ];

inquirer
  .prompt(questions)
  .then((answers) => {
    // const htmlPageContent = generateHTML(answers);
    console.log(answers);
    console.log(answers.title);
    
    // fs.writeFile('index.html', htmlPageContent, (err) =>
    //   err ? console.log(err) : console.log('Successfully created index.html!')
    // );
    //writeToFile("readme.md", answers)
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
//init();