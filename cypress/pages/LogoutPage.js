class LogoutPage {
  logout() {
    // Open the user dropdown
    cy.get("#menuUserLink", { timeout: 10000 }).click();

    // Click on the "Sign out" option
    cy.get('#loginMiniTitle > [translate="Sign_out"]', { timeout: 10000 })
      .should("be.visible")
      .click();
  }
}

export default new LogoutPage();
