const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    experimentalSessionAndOrigin: true,
    testIsolation: false,                             
    setupNodeEvents(on, config) {
      // implement node event listeners here (kalau perlu)
    },
  },
});

