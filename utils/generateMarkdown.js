// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ## *${data.title}*
  
  ${data.badge === "MIT" ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : data.badge === "Apache" ? "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : data.badge === "IBM" ? "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"}
  
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