Feature: Login functionality

  @login
  Scenario: Successful login with valid credentials
    Given user is on the login page
    When user logs in with credentials
      | username | password    |
      | student  | Password123 |
    Then user should see an success message "Logged In Successfully"

  @login
  Scenario: Unsuccessful login with invalid userid
    Given user is on the login page
    When user logs in with credentials
      | username | password    |
      | trainer  | Password123 |
    Then user should see an error message "Your username is invalid!"

  @login
  Scenario: Unsuccessful login with invalid password
    Given user is on the login page
    When user logs in with credentials
      | username | password    |
      | student  | Password234 |
    Then user should see an error message "Your password is invalid!"