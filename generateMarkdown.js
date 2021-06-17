// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "None") {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return ''
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title 
  ${data.title}
  
  
  # Table of contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contribution](#contribution)
  5. [Testing](#testing)
  6. [Licensing](#licensing)
  7. [Questions](#questions)
  
  
  

  
## Description <a name="description"></a>
${data.description}

## Installation <a name="installation"></a>
${data.installation}

## Usage <a name="usage"></a>
${data.usage}

## Contribution <a name="contribution"></a>
${data.contribution}

## Testing <a name="testing"></a>
${data.testing}

## Licensing <a name="licensing"></a>
${data.licensing}

## Questions <a name="questions"></a>
<https://github.com/${data.questions}>

## Questionss
<${data.questionss}>
`;
}
//make bullet points in markdown
//how to link to different sections in the markdown file
module.exports = generateMarkdown;