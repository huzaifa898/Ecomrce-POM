class RegisterPage {
  clickUserIcon() {
    cy.get("#menuUserLink").click();
  }

  clickCreateNewAccount() {
    cy.get(".create-new-account").click();
  }

  enterUsername(username) {
    cy.get('input[name="usernameRegisterPage"]').clear().type(username);
  }

  enterEmail(email) {
    cy.get('input[name="emailRegisterPage"]').clear().type(email);
  }

  enterPassword(password) {
    cy.get('input[name="passwordRegisterPage"]').clear().type(password);
  }

  confirmPassword(password) {
    cy.get('input[name="confirm_passwordRegisterPage"]', { timeout: 10000 })
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true })
      .type(password, { force: true });
  }

  enterFirstName(firstName) {
    cy.get('input[name="first_nameRegisterPage"]').clear().type(firstName);
  }

  enterLastName(lastName) {
    cy.get('input[name="last_nameRegisterPage"]').clear().type(lastName);
  }

  enterPhone(phone) {
    cy.get('input[name="phone_numberRegisterPage"]').clear().type(phone);
  }

  selectCountry(country) {
    cy.get('select[name="countryListboxRegisterPage"]').select(country);
  }

  enterCity(city) {
    cy.get('input[name="cityRegisterPage"]').clear().type(city);
  }

  enterAddress(address) {
    cy.get('input[name="addressRegisterPage"]').clear().type(address);
  }

  enterState(state) {
    cy.get('input[name="state_/_province/_regionRegisterPage"]')
      .clear()
      .type(state);
  }

  enterPostalCode(code) {
    cy.get('input[name="postal_codeRegisterPage"]').clear().type(code);
  }

  acceptTerms() {
    cy.get('input[name="i_agree"]').check({ force: true });
  }

  clickRegister() {
    cy.get("#register_btn").should("be.visible").click();
  }
}

export default new RegisterPage();
