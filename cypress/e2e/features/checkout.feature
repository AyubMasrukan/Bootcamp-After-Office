Feature: Checkout Process

  Scenario: Complete a checkout successfully
    Given I am on the cart page with a product
    When I click the checkout button
    And I fill in checkout information
    And I finish the checkout process
    Then I should see the confirmation page
