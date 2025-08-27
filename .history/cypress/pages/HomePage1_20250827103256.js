class HomePage1 {
  verifyCategories() {
    const categories = ["TABLETS", "LAPTOPS", "HEADPHONES", "SPEAKERS", "MICE"];
    categories.forEach((cat) => {
      cy.contains(cat).should("be.visible");
    });
  }

  openFirstProduct() {
    cy.get(".product").first().click();
  }

  openAllProducts() {
    cy.get(".product").each(($el) => {
      cy.wrap($el).click();
      cy.get(".productName").should("be.visible");
      cy.go("back");
    });
  }
}
module.exports = new HomePage1();
