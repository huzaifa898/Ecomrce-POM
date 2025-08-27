const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    baseUrl: "https://advantageonlineshopping.com",
    retries: {
      runMode: 2, // Retry failed tests 2 times in headless mode
      openMode: 0, // No retries in interactive mode (optional)
    },
  },
});
