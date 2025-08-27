const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://advantageonlineshopping.com",

    reporter: "cypress-mochawesome-reporter", // added reporter
    reporterOptions: {
      reportDir: "cypress/reports/html", // reports folder
      reportFilename: "index", // report name
      charts: true, // adds charts
      reportPageTitle: "E2E Test Report", // custom title
      embeddedScreenshots: true, // embed screenshots
      inlineAssets: true, // single-file HTML
    },

    screenshotsFolder: "cypress/reports/screenshots", // where screenshots go
    videosFolder: "cypress/reports/videos", // where videos go
    video: true, // record videos

    retries: {
      runMode: 2, // Retry failed tests 2 times in headless mode
      openMode: 0, // No retries in interactive mode
    },

    setupNodeEvents(on, config) {
      // Register the mochawesome plugin
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
