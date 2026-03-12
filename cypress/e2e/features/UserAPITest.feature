Feature: API testing

Scenario: Create user
  Given user prepares create request
  When user sends POST request
  Then user should be created successfully

Scenario: Update user
  Given user prepares update request
  When user sends PUT request
  Then user should be updated successfully