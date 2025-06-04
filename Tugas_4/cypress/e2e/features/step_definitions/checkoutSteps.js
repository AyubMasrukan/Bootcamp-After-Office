import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the cart page with a product", () => {
  cy.visit("https://www.saucedemo.com/");
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get(".shopping_cart_link").click();
  cy.url().should("include", "/cart.html");
});

When("I click the checkout button", () => {
  cy.get('[data-test="checkout"]').click();
});

When("I fill in checkout information", () => {
  cy.get('[data-test="firstName"]').type("John");
  cy.get('[data-test="lastName"]').type("Doe");
  cy.get('[data-test="postalCode"]').type("12345");
  cy.get('[data-test="continue"]').click();
});

When("I finish the checkout process", () => {
  cy.get('[data-test="finish"]').click();
});

Then("I should see the confirmation page", () => {
  cy.url().should("include", "/checkout-complete.html");
  cy.contains("Thank you for your order").should("be.visible");
});
