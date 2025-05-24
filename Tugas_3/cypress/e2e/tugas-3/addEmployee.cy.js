context("Tugas-3", () => {
  Cypress.on("uncaught:exception", () => false);

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/web/index.php/auth/login');
    cy.wait(1000);
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("Tambah karyawan via menu PIM", () => {
    cy.visit('/web/index.php/dashboard/index');
    cy.contains('.oxd-main-menu-item', 'PIM', { timeout: 10000 }).click();
    cy.contains('Add Employee', { timeout: 10000 }).click();
    
    cy.get('input[name="firstName"]').type('ayub');
    cy.get('input[name="middleName"]').type('mas');
    cy.get('input[name="lastName"]').type('rukan');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-loading-spinner', { timeout: 10000 }).should('not.exist');

    cy.get('.oxd-text--h6[data-v-6653c066]').should('contain', 'Personal Details');
    cy.wait(1000);
    cy.url().should('include', '/pim/viewPersonalDetails');
    cy.screenshot(`add_employee_${Date.now()}`);
  });

  it("Buat akun login untuk karyawan via menu Admin", () => {
    cy.contains('.oxd-main-menu-item', 'Admin', { timeout: 10000 }).click();
    cy.url().should('include', '/admin/viewSystemUsers');
    cy.contains('button', 'Add').click();

    cy.get('.oxd-select-text').eq(0).click();
    cy.contains('.oxd-select-option', 'ESS').click();
    cy.get('.oxd-select-text').eq(0).should('contain', 'ESS');
    cy.get('input[placeholder="Type for hints..."]').type("ayub");
    cy.wait(1000);
    cy.get('.oxd-autocomplete-option', { timeout: 5000 }).contains("ayub mas rukan").click();

    cy.get('.oxd-select-text').eq(1).click();
    cy.contains('.oxd-select-option', 'Enabled').click();
    cy.get('.oxd-select-text').eq(1).should('contain', 'Enabled');

    cy.xpath("//div[4]//input[@class='oxd-input oxd-input--active']")
    .should('be.visible')
    .type('ayub123');
    cy.xpath("//div[@class='oxd-grid-item oxd-grid-item--gutters user-password-cell']//input[@class='oxd-input oxd-input--active']")
    .should('be.visible')
    .type('Password123!');
    cy.xpath("//div[@class='oxd-form-row user-password-row']//div[@class='oxd-grid-item oxd-grid-item--gutters']//input[@class='oxd-input oxd-input--active']")
    .should('be.visible')
    .type('Password123!');

    cy.get('button[type="submit"]').click();
    cy.wait(1000);
    cy.get('.oxd-table-filter-header').should('contain', 'System Users');
    cy.get(':nth-child(2) > .oxd-input').type('ayubmas');
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.screenshot(`login_admin_${Date.now()}`);
  });

  it("Tambah karyawan via menu PIM - Negative", () => {
    cy.visit('/web/index.php/dashboard/index');
    cy.contains('.oxd-main-menu-item', 'PIM', { timeout: 10000 }).click();
    cy.contains('Add Employee', { timeout: 10000 }).click();

    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.contains('Required').should('exist');
    cy.screenshot(`add_employee_negative_${Date.now()}`);
  });

  it("Buat akun login untuk karyawan via menu Admin - Negative", () => {
    cy.contains('.oxd-main-menu-item', 'Admin', { timeout: 10000 }).click();
    cy.url().should('include', '/admin/viewSystemUsers');
    cy.contains('button', 'Add').click();
    cy.get('button[type="submit"]').click();
    cy.wait(1000);
    cy.contains('Required').should('exist');
    cy.screenshot(`login_admin_negative_${Date.now()}`);
  });
});
