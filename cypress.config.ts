import { defineConfig } from "cypress"
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor"
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild"

// ✅ Use require() for CommonJS module
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config)

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  )

  return config
}

export default defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/customer/account/login/referer',
    specPattern: '**/*.feature',
    setupNodeEvents,
  },
})