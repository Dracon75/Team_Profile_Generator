const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'teamManager',
            message: 'Please enter the name of your team manager',
        },
        {
            type: 'input',
            name: 'teamManagerID',
            message: 'enter his/her team member ID',
        },
        {
            type: 'input',
            name: 'office',
            message: 'enter his/her office ID',
        },
        {
            type: 'input',
            name: 'teamManagerEmail',
            message: 'enter his/her email',
        },
        {
            type: 'input',
            name: 'teamManagerGit',
            message: 'enter his/her GitHub username URL',
        },
        {
            type: 'input',
            name: 'newMember',
            message: 'would you like to add another member?',
            choice: ["add Engineer", "add Intern", "add another member", "would you like to finish building your team?"]
        },
        {
            type: 'input',
            name: 'Engineer',
            message: 'Please enter the name of your team Engineer',
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'enter his/her team member ID',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'enter his/her email',
        },
        {
            type: 'input',
            name: 'engineerGit',
            message: 'enter his/her GitHub username URL',
        },
        {
            type: 'input',
            name: 'newMember2',
            message: 'would you like to add another member?',
            choice: ["add Engineer", "add Intern", "add another member", "would you like to finish building your team?"]
        },
        {
            type: 'input',
            name: 'teamIntern',
            message: 'Please enter the name of your Intern',
        },
        {
            type: 'input',
            name: 'internID',
            message: 'enter his/her team member ID',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'enter his/her email',
        },
        {
            type: 'input',
            name: 'school',
            message: 'enter his/her school',
        },
        {
            type: 'input',
            name: 'newMember',
            message: 'would you like to add another member?',
            choice: ["add Engineer", "add Intern", "add another member", "would you like to finish building your team?"]
        },
        {
            type: 'input',
            name: 'newMemberInfo',
            message: 'Please enter the name of your new member',
        },
        {
            type: 'input',
            name: 'memberID',
            message: 'enter his/her team member ID',
        },
     
        {
            type: 'input',
            name: 'newMemberEmail',
            message: 'enter his/her email',
        },
        {
            type: 'input',
            name: 'newMemberGit',
            message: 'enter his/her GitHub username URL',
        },
        {
            type: 'confirm',
            name: 'confirmMessage',
            message: 'Are all team members acounted for?',
        },
        
    ])
    .then(function (data) {

        fs.writeFile(`./dist/myTeam.html`,
        `
        <!DOCTYPE html>
        <html lang="en">
            
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./Assets/style.css">
            <title>My Team</title>
        </head>
            
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <div class="cards">
                <div class="card">
                    <div class="banner">
                        <h1 id="employeeName">Name: </h1><p>${data.teamManager}</p>
                        <h1 id="jobTitle">Job Title: </h1><p>Team Manager</p>
                    </div>
            
                    <div class="bannerInfoBox">
                        <div class="container">
                            <h2 id="employeeID">ID: </h2><p>${data.memberID}</p>
                            <h2 id="email">Email: </h2><p><a href=${data.email}>${data.email}</a></p>
                            <h2 id="officeNumber">Office Number: </h2><p>${data.office}</p>
                            <h2 id="gitProfile">Git Hub Profile: </h2><p><a href=${data.git}>${data.git}</a></p>
                            <h2 id="school">School: </h2><p>${data.school}</p>
                        </div>
                    </div>
            
                </div>
            
                    <div class="card">
                        <div class="banner">
                            <h1 id="employeeName">Name: </h1><p>${data.Engineer}</p>
                            <h1 id="jobTitle">Job Title: </h1> <p>Engineer</p>
                        </div>
            
                        <div class="bannerInfoBox">
                            <div class="container">
                                <h2 id="employeeID">ID: </h2><p>${data.memberID}</p>
                                <h2 id="email">Email: </h2><p><a href=${data.email}>${data.email}</a></p>
                                <h2 id="officeNumber">Office Number: </h2><p>${data.office}</p>
                                <h2 id="gitProfile">Git Hub Profile: </h2><p><a href=${data.git}>${data.git}</a></p>
                                <h2 id="school">School: </h2><p>${data.school}</p>
                            </div>
                        </div>
            
                    </div>
            
                    <div class="card">
                        <div class="banner">
                            <h1 id="employeeName">Name: </h1><p>${data.teamIntern}</p>
                            <h1 id="jobTitle">Job Title: </h1><p>Intern</p> 
                        </div>
            
                        <div class="bannerInfoBox">
                            <div class="container">
                                <h2 id="employeeID">ID: </h2><p>${data.memberID}</p>
                                <h2 id="email">Email: </h2><p><a href=${data.email}>${data.email}</a></p>
                                <h2 id="officeNumber">Office Number: </h2><p>${data.office}</p>
                                <h2 id="gitProfile">Git Hub Profile: </h2><p><a href=${data.git}>${data.git}</a></p>
                                <h2 id="school">School: </h2><p>${data.school}</p>
                            </div>
                        </div>
                    
                    </div>
            
                    <div class="card">
                        <div class="banner">
                            <h1 id="employeeName">Name: </h1><p>${data.newMemberInfo}</p>
                            <h1 id="jobTitle">Job Title: </h1><p>Other</p>
                        </div>
            
                        <div class="bannerInfoBox">
                            <div class="container">
                                <h2 id="employeeID">ID: </h2><p>${data.memberID}</p>
                                <h2 id="email">Email: </h2><p><a href=${data.email}>${data.email}</a></p>
                                <h2 id="officeNumber">Office Number: </h2><p>${data.office}</p>
                                <h2 id="gitProfile">Git Hub Profile: </h2><p><a href=${data.git}>${data.git}</a></p>
                                <h2 id="school">School: </h2><p>${data.school}</p>
                            </div>
                        </div>
            
                    </div>
                </div>
            </body>
            
            </html>
            `
                , (err) => err ? console.log(err) : console.log("html created"))

    })