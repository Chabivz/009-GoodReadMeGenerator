const fetch = require("node-fetch");
const index = require("../../index.js");


module.exports = {
    // TODO: Create a function to generate markdown for README
createMD: function generateMarkdown(data, licenseBadgeOutput, licenseSectionOutput, licenseLinkOutput) {
return `# ${data.title}
${data.usage}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## License
![${data.license}](https://img.shields.io/badge/license-${licenseBadgeOutput}-blue.svg)

[${data.license}](${licenseLinkOutput})

${licenseSectionOutput}

## Tests
${data.tests}

## Questions 
[Github](https://github.com/${data.github}/)
[Email](${data.email})
`;
    },


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
licenseBadge: function renderLicenseBadge(licenseInput) {
  let license = licenseInput;
  console.log(license);
  const request = 'https://api.github.com/licenses';
  fetch(request)
  .then(res => res.json())
  .then(data => {
    for (i = 0 ; i <= 13 ; i++) {
      // console.log(data[i].key)
      if (license === data[i].name) {
        let licenseBadgeOutput = data[i].key
        console.log("GenerateMarkdown License Key: " + licenseBadgeOutput);
        return licenseBadgeOutput;  
      } 
    }
  })
  .catch(function (error) {
    console.log("Fetch Error" + error)
  })
},
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
licenseLink: function renderLicenseLink(licenseInput) {
  let license = licenseInput;
  console.log(license);
  const request = 'https://api.github.com/licenses';
  fetch(request)
  .then(res => res.json())
  .then(data => {
    for (i = 0 ; i <= 13 ; i++) {
      // console.log(data[i].key)
      if (license === data[i].name) {
        let licenseBadgeOutput = data[i].url
        console.log("GenerateMarkdown License Link: " + licenseBadgeOutput);
        return licenseBadgeOutput;  
      } 
    }
  })
  .catch(function (error) {
    console.log("Fetch Error" + error)
  })
},

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
licenseSection: function renderLicenseSection(licenseInput) {
  let license = licenseInput;
  console.log(license);
  const request = 'https://api.github.com/licenses';
  fetch(request)
  .then(res => res.json())
  .then(data => {
    for (i = 0 ; i <= 13 ; i++) {
      // console.log(data[i].key)
      if (license === data[i].name) {
        let licenseBadgeOutput = data[i].key
        console.log("gm.js " + licenseBadgeOutput);
        return licenseBadgeOutput;  
      } 
    }
  })
  .catch(function (error) {
    console.log("Fetch Error" + error)
  })
}
}
