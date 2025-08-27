class LoginPage {
  openLoginModal() {
    cy.get("#menuUser").click();
  }

  login(username, password) {
    cy.get("input[name='username']").type(username);
    cy.get("input[name='password']").type(password);

    //Wait until loader is hidden before clicking Sign In
    cy.get(".loader", { timeout: 10000 }).should("not.be.visible");
    cy.get("#sign_in_btn").click();
  }

  verifyLogin(username) {
    cy.get("#menuUserLink", { timeout: 10000 }).should("contain", username);
  }

  logout() {
    cy.get("#menuUserLink").click();
    cy.contains("Sign out").click();
  }
}
module.exports = new LoginPage();
