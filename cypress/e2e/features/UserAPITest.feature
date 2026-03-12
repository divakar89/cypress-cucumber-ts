Feature: Validation of API on JSONPlaceholder site

  Scenario: Validate API response
    Given I send a GET request to the user API
    Then I should receive the expected user details

  @test
  Scenario: Update user data via API
    Given I update user data via the posts API
    Then the API should respond with a success status code