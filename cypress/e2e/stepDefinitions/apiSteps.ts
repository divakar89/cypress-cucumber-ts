import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

let response

Given("user prepares create request", () => {

  cy.wrap({
    name: "John",
    job: "QA"
  }).as('payload')

})

When("user sends POST request", function () {

  cy.request({
    method: "POST",
    url: "https://reqres.in/api/users",
    body: this.payload
  }).then((res)=>{
    response = res
  })

})

Then("user should be created successfully", () => {

  expect(response.status).to.eq(201)

})


Given("user prepares update request", () => {

})

When("user sends PUT request", () => {

  cy.request({
    method: "PUT",
    url: "https://reqres.in/api/users/2",
    body: {
      name: "John Updated",
      job: "QA Lead"
    }
  }).then((res)=>{
    response = res
  })

})

Then("user should be updated successfully", () => {

  expect(response.status).to.eq(200)

})