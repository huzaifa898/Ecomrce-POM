class HomePage1 {
  verifyCategories() {
    const categories = ["TABLETS", "LAPTOPS", "HEADPHONES", "SPEAKERS", "MICE"];
    categories.forEach((cat) => {
      cy.contains(cat).should("be.visible");
    });
  }

  openFirstProduct() {
    cy.get("#tabletsImg").first().click();
  }

  openAllProducts() {
    cy.get("#tabletsImg").each(($el) => {
      cy.wrap($el).click();
      cy.get(".categoryTitle").should("be.visible");
      cy.go("back");
    });
  }
}
module.exports = new HomePage1();
