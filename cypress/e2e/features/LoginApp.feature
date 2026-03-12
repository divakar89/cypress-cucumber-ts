Feature: Login functionality

  @test
  Scenario: Successful login with valid credentials
    Given user is on the login page
    When user logs in with credentials
      | username | password  |
      | admin    | admin123  |
    Then user should see the dashboard

  Scenario: Unsuccessful login with invalid credentials
    Given user is on the login page
    When user logs in with credentials
      | username | password   |
      | admin    | wrongpass  |
    Then user should see an error message "Invalid username or password"