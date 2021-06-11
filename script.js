// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

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
      default: 'npm i'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information',
      
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'How can someone contribute to this project?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'what command should be run to run tests?',
      default: 'npm test'
    },
    {
      type: 'input',
      name: 'licensing',
      message: 'Which license are you using?',

    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is your Github usernanme?',
  
      },
      {
        type: 'input',
        name: 'questionss',
        message: 'What is your email?',
  
      },
  ];

inquirer
  .prompt(questions)
  .then((answers) => {
    // const htmlPageContent = generateHTML(answers);
    console.log(answers);
    console.log(answers.title);
    
     fs.writeFile("readme.md", generateMarkdown(answers), (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
     );
    //writeToFile("readme.md", answers)
  });

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();