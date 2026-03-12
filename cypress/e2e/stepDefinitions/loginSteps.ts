import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../pageObjects/LoginPage"

const loginPage = new LoginPage()

Given("user is on the login page", () => {
  loginPage.visit()
})

When("user logs in with credentials", (table: DataTable) => {
  // Use the first row in the data table
  const data = table.hashes()[0]
  loginPage.login(data.username, data.password)
})

Then("user should see the dashboard", () => {
  loginPage.verifyLoginSuccess()
})

Then("user should see an error message {string}", (message: string) => {
  loginPage.verifyLoginFailure(message)
})