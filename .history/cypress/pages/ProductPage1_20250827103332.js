class ProductPage1 {
  addToCart() {
    cy.get("button[name='save_to_cart']").click();
  }
}
module.exports = new ProductPage1();
