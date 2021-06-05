const fetch = require("node-fetch");
const index = require("../../index.js");

    // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
${renderLicenseTableOfContents(data.license)}


## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions 
[Github](https://github.com/${data.github}/)\n
[Email](mailto:${data.email})

${renderLicenseSection(data.license)}\n
${renderLicenseBadge(data.license)}\n
${renderLicenseLink(data.license)}\n



`;
    }


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'GNU Affero General Public License v3.0':
      return `![GitHub license](https://img.shields.io/badge/license--agpl--3.0--lightgrey)`
    case 'Apache License 2.0':
      return `![GitHub license](https://img.shields.io/badge/license--apache--2.0--blue)`
    case 'BSD 2-Clause \"Simplified\" License':
      return `![GitHub license](https://img.shields.io/badge/license--bsd--2--blue)`
    case 'BSD 3-Clause \"New\" or \"Revised\" License':
      return `![GitHub license](https://img.shields.io/badge/license--bsd--3--blue)`
    case 'Boost Software License 1.0':
      return `![GitHub license](https://img.shields.io/badge/license--bsl--1.0--blue)`
    case 'Creative Commons Zero v1.0 Universal':
      return `![GitHub license](https://img.shields.io/badge/license--cc0--1.0--blue)`
    case 'Eclipse Public License 2.0':
      return `![GitHub license](https://img.shields.io/badge/license--epl--2.0--blue)`
    case 'GNU General Public License v2.0':
      return `![GitHub license](https://img.shields.io/badge/license--gpl--2.0--blue)`
    case 'GNU General Public License v3.0':
      return `![GitHub license](https://img.shields.io/badge/license--gpl--3.0--blue)`
    case 'GNU Lesser General Public License v2.1':
      return `![GitHub license](https://img.shields.io/badge/license--lgpl--2.1--blue)`
    case 'MIT License':
      return `![GitHub license](https://img.shields.io/badge/license--MIT--blue)`
    case 'Mozilla Public License 2.0':
      return `![GitHub license](https://img.shields.io/badge/license--mpl--2.0--blue)`
    case 'The Unlicense':
      return `![GitHub license](https://img.shields.io/badge/license--unlicense-blue)`
    default:
      return '';

  }
}
function renderLicenseLink(license) {
  switch(license) {
    case 'GNU Affero General Public License v3.0':
      return `[GitHub license](https://api.github.com/licenses/agpl-3.0)`
    case 'Apache License 2.0':
      return `[GitHub license](https://api.github.com/licenses/apache-2.0)`
    case 'BSD 2-Clause \"Simplified\" License':
      return `[GitHub license](https://api.github.com/licenses/bsd-2-clause)`
    case 'BSD 3-Clause \"New\" or \"Revised\" License':
      return `[GitHub license](https://api.github.com/licenses/bsd-3-clause)`
    case 'Boost Software License 1.0':
      return `[GitHub license](https://api.github.com/licenses/bsl-1.0)`
    case 'Creative Commons Zero v1.0 Universal':
      return `[GitHub license](Creative Commons Zero v1.0 Universal)`
    case 'Eclipse Public License 2.0':
      return `[GitHub license](https://api.github.com/licenses/epl-2.0)`
    case 'GNU General Public License v2.0':
      return `[GitHub license](https://api.github.com/licenses/gpl-2.0)`
    case 'GNU General Public License v3.0':
      return `[GitHub license](https://api.github.com/licenses/gpl-3.0)`
    case 'GNU Lesser General Public License v2.1':
      return `[GitHub license](GNU Lesser General Public License v2.1)`
    case 'MIT License':
      return `[GitHub license](https://api.github.com/licenses/mit)`
    case 'Mozilla Public License 2.0':
      return `[GitHub license](https://api.github.com/licenses/mpl-2.0)`
    case 'The Unlicense':
      return `[GitHub license](https://api.github.com/licenses/unlicense)`
    default:
      return '';

  }
  
}

function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License`

}

function renderLicenseTableOfContents(license) {

  if (license === 'None' ) {
    return '';
  }
  return `- [License](#license)`
  
}


module.exports = generateMarkdown;