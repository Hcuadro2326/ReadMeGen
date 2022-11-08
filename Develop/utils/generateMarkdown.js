function generateMarkdown(data) {
  return `# 
      - ${data.title}

## Description 
${data.description}

## Table of Contents

* [Installation](#installation)
* [Use](#use)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)

## Installation 
${data.installation}

## Usage 
${data.use}

## License 
This project is license under ${data.license}

## Contributing 
${data.contributors}

## Tests
${data.test}

`;
}

module.exports = generateMarkdown;