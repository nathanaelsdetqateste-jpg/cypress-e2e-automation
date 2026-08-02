import { defineConfig } from "cypress";
import mochawesome from "cypress-mochawesome-reporter/plugin.js";

export default defineConfig({
  allowCypressEnv: false,

  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports/mochawesome-report",
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      mochawesome(on, config);

      return config;
    },
    baseUrl: "https://automationexercise.com/",
  },

  downloadsFolder: "cypress/downloads",
});
