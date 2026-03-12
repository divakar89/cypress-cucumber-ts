import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import SearchPage from "../pageObjects/SortPage"

const sortPage = new SearchPage()

Given("user is on the testTable page", () => {
  sortPage.visit()
})

When("user sorts courses by {string}", (type: string) => {
  sortPage.sort(type)
})

Then("top displayed result ID should be {string}", (id: string) => {
  sortPage.verifySortResults(id)
})