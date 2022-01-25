function generateMarkdown(data) {
    return `
    //appended each input from index.js
  # ${data.projectTitle}

  ## Description 
  ${data.projectDescription}

  ## Installation
  * ${data.installation}

  ## Instructions to use App
  * ${data.instructions}

  ## Collaboration
  * ${data.collaboration}

  ## Third Parties
  * ${data.thirdParties}

  ## Tutorials
  * ${data.tutorials}

  ## Tests
  * ${data.test}


### Contact Me 

Email: ${data.email}

Github : https://github.com/${data.githubUserName}

Phone Number: ${data.phoneNumber}

  `;
  }
  
  module.exports = generateMarkdown;
  