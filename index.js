const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Project Name\n\n',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project.\nUse the following questions as a guide. \n- What was your motivation? \n- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.") \n- What problem does it solve? \n- What did you learn?\n\n'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? \nProvide a step-by-step description of how to get the development environment running.\n\n',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. Include screenshots as needed.\n To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it.\nThen, using the relative filepath, add it to your README using the following syntax:\n \n ```md \n![alt text](assets/images/screenshot.png) \n```\n\n',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'List your collaborators, if any, with links to their GitHub profiles. \n If you used any third-party assets that require attribution,\nlist the creators with links to their primary web presence in this section.\nIf you followed tutorials, include links to those here as well.\n\n',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Go the extra mile and write tests for your application.\n Then provide examples on how to run them here.\n\n',
    },
    {
        // BADGE on top of READ ME LICENSE
      type: 'input',
      name: 'license',
      message: '\n![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)\n\n',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username\n\n',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your Email address.\n\n',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateReadMe(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });

