module.exports = {
  "reporter": "cypress-mochawesome-reporter",
  // "reporterOptions": {
  //   "reportDir": "cypress/Reports",
  //   "charts": true,
  //   "overwrite": true,
  //   "html": true,
  //   "json": true,
  //   "reportPageTitle": "Legrande Cypress",
  //   "reportFilename": "Legrande Cypress Test Report",
  //   "embeddedScreenshots": true,
  //   "inlineAssets": true
  // },
  "defaultCommandTimeout": 30000,
  "retries": {
    "runMode": 1,
    "openMode": 1
  },
 
  "video": true,
  "scrollBehavior": "nearest",
  "chromeWebSecurity": false,
  e2e: {
    testIsolation:false,
    baseUrl: 'https://www.zigwheels.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
};
