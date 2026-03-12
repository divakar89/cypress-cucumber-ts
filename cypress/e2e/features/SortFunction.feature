Feature: Sort functionality

  Scenario Outline: Sort courses based on criteria
    Given user is on the testTable page
    When user sorts courses by "<type>"
    Then top displayed result ID should be "<id>"

    Examples:
      | type        | id      |
      | ID          | 1517620 |  
      | Course Name | 1904956 |
      | Language    | 1743612 |
      | Level       | 1517620 |
      | Enrollments | 5393658 |    