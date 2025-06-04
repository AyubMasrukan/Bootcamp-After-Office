Feature: Login Page

  Scenario: Successful login with valid credentials
    Given I visit the login page
    When I enter valid username and password
    And I click the login button
    Then I should be redirected to the inventory page

  Scenario: Failed login with invalid credentials
    Given I visit the login page
    When I enter invalid username and password
    And I click the login button
    Then I should see an error message
