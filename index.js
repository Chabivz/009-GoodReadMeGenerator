// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const genMD = require('./assets/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questionsBank = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: '\n\nWhat is the Project Name\n\n',
    },
    {
      type: 'input',
      name: 'description',
      message: '\n\nDescription\nProvide a short description explaining the what, why, and how of your project.\nUse the following questions as a guide.\n- What was your motivation?\n- Why did you build this project?\n(Note: the answer is not "Because it was a homework assignment.")\n- What problem does it solve? \n- What did you learn?\n\n'
    },
    {
      type: 'input',
      name: 'installation',
      message: '\n\nInstallation\nWhat are the steps required to install your project? \nProvide a step-by-step description of how to get the development environment running.\n\n',
    },
    {
      type: 'input',
      name: 'usage',
      message: '\n\nUsage\nProvide instructions and examples for use. Include screenshots as needed.\nTo add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it.\nThen, using the relative filepath, add it to your README using the following syntax:\n\n\n ```md \n![alt text](assets/images/screenshot.png) \n```\n\n',
    },
    {
      type: 'input',
      name: 'contribution',
      message: '\n\nContribution\nList your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution,\nlist the creators with links to their primary web presence in this section.\nIf you followed tutorials, include links to those here as well.\n\n',
    },
    {
      type: 'input',
      name: 'tests',
      message: '\nTests\nGo the extra mile and write tests for your application.\n Then provide examples on how to run them here.\n\n',
    },
    {
        // BADGE on top of READ ME LICENSE
  
      type: 'list',
      name: 'license',
      message: '\nLicense\n\nThe last section of a high-quality README file is the license.\nThis lets other developers know what they can and cannot do with your project.\nIf you need help choosing a license, refer to https://choosealicense.com/.\n',
      choices: [
        { title: 'None', value: 'None' },
        { title: 'GNU Affero General Public License v3.0', value: 'GNU Affero General Public License v3.0' },
        { title: 'Apache License 2.0', value: 'Apache License 2.0' },
        { title: 'MIT License', value: 'MIT License' },
        { title: 'Mozilla Public License 2.0', value: 'Mozilla Public License 2.0' },
        { title: 'The Unlicense', value: 'The Unlicense' },
        { title: 'GNU Lesser General Public License v2.1', value: 'GNU Lesser General Public License v2.1' },
        { title: 'GNU General Public License v2.0', value: 'GNU General Public License v2.0' },
        { title: 'GNU General Public License v3.0', value: 'GNU General Public License v3.0' },
        { title: 'Eclipse Public License 2.0', value: 'Eclipse Public License 2.0' },
        { title: 'Creative Commons Zero v1.0 Universal', value: 'Creative Commons Zero v1.0 Universal' },
        { title: 'Boost Software License 1.0', value: 'Boost Software License 1.0' },
        { title: 'BSD 3-Clause \"New\" or \"Revised\" License', value: 'BSD 3-Clause \"New\" or \"Revised\" License' },
        { title: 'BSD 2-Clause \"Simplified\" License', value: 'BSD 2-Clause \"Simplified\" License' }
      ],
      max: 1,
      hint: '- Space to select. Return to submit'
    },
    {
      type: 'input',
      name: 'github',
      message: '\nEnter your GitHub Username\n\n',
    },
    {
      type: 'input',
      name: 'email',
      message: '\nEnter your Email address.\n\n',
    },
  
  ]);
};

// TODO: Create a function to write README file
const writeFile = util.promisify(fs.writeFile);


// TODO: Create a function to initialize app
function init() {
  questionsBank()
  .then((answers) => {
    
    let licenseInput = answers.license;
    let licenseBadgeOutput = genMD.licenseBadge(licenseInput);
    console.log("Index Badge Output =  " + licenseBadgeOutput);
    let licenseLinkOutput = genMD.licenseLink(licenseInput);
    console.log("Index License Link Output =  " + licenseLinkOutput);
    let licenseSectionOutput = genMD.licenseSection(licenseInput);
    console.log("Index License Link Output =  " + licenseSectionOutput);
    writeFile('./Output/README.md', genMD.createMD(answers, licenseBadgeOutput, licenseLinkOutput, licenseSectionOutput))
  })
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));
    
}

// Function call to initialize app
init();
