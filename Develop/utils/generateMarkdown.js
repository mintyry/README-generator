// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    return `![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-74edd1.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➣ [License](#License)\n';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseAnswer) {
  if (licenseAnswer === 'None') {
    return '';
  } else {
    return `<a id="License"></a>\n ## License 📜\n  This application is covered under the ${licenseAnswer} license.\n`;
  }
}

function renderCredsLink(cred){
  if (cred === 'N/A') {
    return '';
  } else {
    return '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➣ [Credits](#Credits)\n';
  }
}

function renderCredsSection(cred) {
  if (cred === 'N/A') {
    return '';
  } else {
    return `<a id="Credits"></a>\n ## Credits 🤝\n  ${cred}\n`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.appName}\n
${renderLicenseBadge(data.licenses)}\n

## Description 📰\n
${data.description}\n

## Table of Contents\n
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➣ [Installation](#Installation)\n
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➣ [Usage](#Usage)\n
${renderLicenseLink(data.licenses)}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➣ [Contributing](#Contributing)\n
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➣ [Tests](#Tests)\n
${renderCredsLink(data.credits)}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➣ [Questions](#Questions)\n

<a id="Installation"></a>
## Installation 🔌\n
In order to install, please run \`${data.installation}\`.\n

<a id="Usage"></a>
## Usage 🧮\n
In order to use this app, please run \`${data.usage}\`.\n

${renderLicenseSection(data.licenses)}

<a id="Contributing"></a>
## Contributing 🍴\n
In order to contribute, one must ${data.collab}.\n

<a id="Tests"></a>
## Tests ⚖️\n
In order to test, please run \`${data.tests}\`.\n

${renderCredsSection(data.credits)}

<a id="Questions"></a>
## Questions 📭\n
Please enjoy my work at my GitHub, @[${data.github}](https://github.com/${data.github}).\n
For any additional inquiries, please [email me](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
