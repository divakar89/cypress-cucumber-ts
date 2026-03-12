export default class SearchPage {
  // Locators
  searchBox = "#search"
  submitButton = "#submit"
  resultsContainer = "#results"

  // Visit the search page
  visit() {
    cy.visit("/search")
  }

  // Perform search
  search(product: string) {
    cy.get(this.searchBox).clear().type(product)
    cy.get(this.submitButton).click()
  }

  // Verify that results include the product
  verifyResultsInclude(product: string) {
    cy.get(this.resultsContainer).should("contain.text", product)
  }
}