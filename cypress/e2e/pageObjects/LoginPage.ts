export default class LoginPage {
  // Locators
  usernameInput = "#username"
  passwordInput = "#password"
  loginButton = "#login"
  errorMessage = "#error"

  // Visit the login page
  visit() {
    cy.visit("/login")
  }

  // Perform login
  login(username: string, password: string) {
    cy.get(this.usernameInput).clear().type(username)
    cy.get(this.passwordInput).clear().type(password)
    cy.get(this.loginButton).click()
  }

  // Verify successful login
  verifyLoginSuccess() {
    cy.url().should("include", "/dashboard")
  }

  // Verify login failure
  verifyLoginFailure(message: string) {
    cy.get(this.errorMessage).should("contain.text", message)
  }
}