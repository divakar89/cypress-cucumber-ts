export default class LoginPage {
  // Locators
  usernameInput = "#username"
  passwordInput = "#password"
  loginButton = "#submit"
  successMessage = "h1.post-title"
  errorMessage = "#error"

  // Visit the login page
  visit() {
    cy.visit("https://practicetestautomation.com/practice-test-login/")
  }

  // Perform login
  login(username: string, password: string) {
    cy.get(this.usernameInput).clear().type(username)
    cy.get(this.passwordInput).clear().type(password)
    cy.get(this.loginButton).click()
  }

  // Verify successful login
  verifyLoginSuccess(message: string) {
    cy.contains(this.successMessage, message).should("be.visible")
  }

  // Verify login failure
  verifyLoginFailure(message: string) {
    cy.contains(this.errorMessage, message).should("be.visible")
  }
}