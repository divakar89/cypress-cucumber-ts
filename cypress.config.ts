import { defineConfig } from "cypress"
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor"
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild"

// ✅ Use require() for CommonJS module
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config)

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      )

      return config
    },

    env: {
      stepDefinitions: "cypress/e2e/stepDefinitions/*.ts"
    }
  },
})