class ProductPage {
  addToCart() {
    cy.get('[name="save_to_cart"]', { timeout: 10000 })
      .should("be.visible")
      .scrollIntoView()
      .click();
  }

  checkoutDirectlyFromMiniCart() {
    // Open the mini cart
    cy.get("#menuCart", { timeout: 10000 }).click();

    // ✅ Directly click the checkout button (skip waiting for cart items)
    cy.get('[name="check_out_btn"]', { timeout: 10000 }).click();
  }
}

export default new ProductPage();
