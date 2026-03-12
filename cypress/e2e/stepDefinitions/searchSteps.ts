import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import SearchPage from "../pageObjects/SearchPage"

const searchPage = new SearchPage()

Given("user is on the search page", () => {
  searchPage.visit()
})

When("user searches for {string}", (product: string) => {
  searchPage.search(product)
})

Then("search results should include {string}", (product: string) => {
  searchPage.verifyResultsInclude(product)
})