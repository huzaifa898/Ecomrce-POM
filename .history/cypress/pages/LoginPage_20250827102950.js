class LoginPage {
  openLoginModal() {
    cy.get("#menuUser").click();
  }

  login(username, password) {
    cy.get("input[name='username']").type(username);
    cy.get("input[name='password']").type(password);
    cy.get("button#sign_in_btn").click();
  }

  verifyLogin(username) {
    cy.get("#menuUserLink").should("contain", username);
  }

  logout() {
    cy.get("#menuUserLink").click();
    cy.contains("Sign out").click();
  }
}
module.exports = new LoginPage();
