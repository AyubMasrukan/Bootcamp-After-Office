import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am logged in", () => {
  cy.visit("https://www.saucedemo.com/");
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
  cy.url().should("include", "/inventory.html");
});

When("I add a product to the cart", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

When("I remove the product from the cart", () => {
  cy.get('[data-test="remove-sauce-labs-backpack"]').click();
});

Then("the cart badge should show 1", () => {
  cy.get(".shopping_cart_badge").should("contain", "1");
});

Then("the cart badge should not be visible", () => {
  cy.get(".shopping_cart_badge").should("not.exist");
});
