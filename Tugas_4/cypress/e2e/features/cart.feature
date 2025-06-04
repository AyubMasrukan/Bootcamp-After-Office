Feature: Shopping Cart

  Scenario: Add item to cart
    Given I am logged in
    When I add a product to the cart
    Then the cart badge should show 1

  Scenario: Remove item from cart
    Given I am logged in
    And I add a product to the cart
    When I remove the product from the cart
    Then the cart badge should not be visible
