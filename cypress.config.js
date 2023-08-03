const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "65x1nf",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
