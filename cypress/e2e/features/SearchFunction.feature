Feature: Search functionality

Feature: Search functionality

  Scenario Outline: Search for multiple products
    Given user is on the search page
    When user searches for "<product>"
    Then search results should include "<product>"

    Examples:
      | product   |
      | Laptop    |
      | Smartphone|
      | Headphones|