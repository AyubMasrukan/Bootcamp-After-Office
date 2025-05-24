context("Tugas-3", () => {
  Cypress.on("uncaught:exception", () => false);

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/web/index.php/auth/login');
    cy.wait(2000);
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("Positive", function() {
    cy.wait(2000);
    cy.contains('Leave').click();
    cy.contains('Entitlements').click();
    cy.xpath("//a[.='Add Entitlements']").click();

    cy.get('input[placeholder="Type for hints..."]').type("ayub");
    cy.wait(1000);
    cy.get('.oxd-autocomplete-option', { timeout: 5000 }).contains("ayub mas rukan").click();

    cy.get('.oxd-select-text').first().click();
    cy.contains('CAN - Vacation').click();
    
    cy.get('.oxd-input').eq(1).type('2');
    
    cy.get('[type="submit"]').click();
    cy.contains('button', 'Confirm').click();
    cy.wait(2000);
    cy.contains('Success').should('be.visible');
    cy.wait(5000);
    cy.screenshot(`addEmployeeLeave_positif_${Date.now()}`);
  })

  it("Negative", function (){
    cy.contains('Leave').click();
    cy.contains('Entitlements').click();
    cy.xpath("//a[.='Add Entitlements']").click();

    cy.get('[type="submit"]').click();
    cy.wait(2000);
    cy.contains('Required').should('exist');
    cy.screenshot(`addEmployeeLeave_negative_${Date.now()}`);
  });
  
});