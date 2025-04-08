const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bmsjbp',
  reporter: 'cypress-mochawesome-reporter',
  video:true,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    return config;
      // implement node event listeners here
    },
  },
});


// by default cypress can be taken screenshot and recording of execution when testcases got failed.
//inorder to achieved that user need to run the testscripts from terminal