context("Tugas-3", () => {
  Cypress.on("uncaught:exception", () => false);

describe('Flow Karyawan Baru Request Cuti', () => {
  const admin = { username: 'Admin', password: 'admin123' };
  const employee = {
    username: 'ayub123',
    password: 'Password123!',
    fullName: 'ayub mas rukan'
  };
  
  it.skip('Login sebagai karyawan dan request cuti', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.wait(500);
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="username"]').type(employee.username);
    cy.get('input[name="password"]').type(employee.password);
    cy.get('button[type="submit"]').click();

    cy.contains('Leave').click();
    cy.contains('Apply').click();

    cy.contains('Apply Leave').should('exist');

    cy.get('.oxd-select-text').eq(0).click();
    cy.contains('.oxd-select-option', 'CAN - Bereavement').click();

    cy.get('.oxd-form-row .oxd-input-group input').eq(0).clear().type('2025-25-05');
    cy.get('.oxd-form-row .oxd-input-group input').eq(1).clear().type('2025-30-05');

    cy.get('button[type="submit"]').click();

    cy.contains('Successfully Saved').should('exist');
    cy.screenshot(`reqcuti_positif_${Date.now()}`);

    cy.get('.oxd-userdropdown-tab').click();
    cy.contains('Logout').click();
  });

  it.skip('Login sebagai admin dan approve cuti', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.wait(500);
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="username"]').type(admin.username);
    cy.get('input[name="password"]').type(admin.password);
    cy.get('button[type="submit"]').click();

    cy.contains('Leave').click();
    cy.contains('Leave List').click();

    cy.get('input[placeholder="Type for hints..."]').type("ayub");
    cy.wait(1000);
    cy.get('.oxd-autocomplete-option', { timeout: 5000 }).contains("ayub mas rukan").click();
    cy.get('button[type="submit"]').click();

    cy.get('input[type="checkbox"]').check({ force: true });
    cy.contains('Approve').click();

    cy.contains('Successfully Updated').should('exist');
    cy.screenshot(`cuti_approve_${Date.now()}`);

    cy.get('.oxd-userdropdown-tab').click();
    cy.contains('Logout').click();
  });

  it.skip('Login ulang sebagai karyawan dan cek status cuti', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.wait(500);
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="username"]').type(employee.username);
    cy.get('input[name="password"]').type(employee.password);
    cy.get('button[type="submit"]').click();

    cy.contains('Leave').click();
    cy.contains('My Leave').click();

    cy.contains('Approved').should('exist');
  });
});
});
