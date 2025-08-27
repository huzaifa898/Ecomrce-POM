class CartPage {
  openCart() {
    cy.get("#menuCart").click();
  }

  verifyCart() {
    cy.get(".cart_item").should("exist");
  }

  proceedToCheckout() {
    cy.get("#checkOutButton").click();
  }
}
module.exports = new CartPage();
