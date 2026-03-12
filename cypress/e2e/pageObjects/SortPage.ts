import "cypress-xpath"

export default class SortPage {
  // Locators
  sortBy = "#sortBy"
  firstResultID = "//table/tbody/tr[1]/td[@data-col='id']"

  // Visit the courses page
  visit() {
    cy.visit("https://practicetestautomation.com/practice-test-table/")
  }

  // Perform sort
  sort(type: string) {
    cy.get(this.sortBy).select(type);
  }

  // Verify that results include the product
  verifySortResults(id: string) {
    cy.xpath(this.firstResultID)
    .should("be.visible")                   // element is visible
    .invoke("text")                         // get the text
    .then((text: string) => {
      expect(text.trim()).to.eq(id)      // assert exact text
    })
  }
}