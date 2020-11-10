// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ## *${data.title}*
  
  ${data.license === "MIT License" ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : data.license === "Apache License v2.0" ? "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : data.license === "GNU General Public License v3.0" ? "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)" : ""}
  
  ## Table of Contents

  -[Description](#Description) <br>

  -[Installation](#Installation) <br>

  -[Contributions](#Contributions) <br>

  -[Test](#Test) <br>

  -[License](#License) <br>

  -[GitHub](#Github) <br>

  -[Questions](#Questions) <br>

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Contributions
  ${data.contribution}

  ## Test
  ${data.test}

  ## License
  ${data.license}

  ## GitHub
  https://github.com/${data.github} <br>

  ## Questions 
  ${data.questions}

  Profile Link below <br>
  https://github.com/${data.github} <br>
`;

}
module.exports = generateMarkdown;