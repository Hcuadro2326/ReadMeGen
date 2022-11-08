// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
const fs = require ("fs");
const generateMarkdown = require ('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
    return inquirer.prompt ([
        {
            type: "input",
            message: "What do you want the Title of your Project to be?",
            name: "title"
        },
        {
            type: "input",
            message: "Describe your application",
            name: "description"
        }, 
        {
            type: "input",
            message: "What are the steps to installing this app?",
            name: "installation"
        },    
        {
            type: "input",
            message: "How will you use it?",
            name: "use"
        },  
        {
            type: "list",
            message: "Choose a license for your application",
            name: "license",
            choices: ["MIT License", "BoogieMan" , "ISC License", "No License"]

        },  
        {
            type: "input",
            message: "Who worked on this app?",
            name: "contributors"
        },  
        {
            type: "input",
            message: "Steps to test this app?",
            name: "test"
        }, 
    ])



// TODO: Create a function to write README file
.then((data) => {
    fs.writeFile( 'README.md', generateMarkdown(data), (error) => {
        if (error) {
            console.log(`This is an error ${error}`)
        } else {
            console.log('File  has been created!')
        }
    })
})

// TODO: Create a function to initialize app

// Function call to initialize app
init();