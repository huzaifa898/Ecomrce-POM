class SearchPage {
  elements = {
    searchIcon: () => cy.get('[name="mobile_search"]'),
    searchInput: () => cy.get('[name="mobile_search"]'),
    product: (productName) =>
      cy.contains(".product-list-item", productName, { timeout: 10000 }), // wait up to 10s
  };

  clickSearchIcon() {
    this.elements
      .searchIcon()
      .should("exist")
      .then(($el) => {
        if ($el.is(":visible")) {
          cy.wrap($el).click();
        } else {
          cy.wrap($el).click({ force: true });
        }
      });
  }

  typeSearch(productName) {
    this.elements
      .searchInput()
      .should("be.visible")
      .clear()
      .type(productName + "{enter}");
  }

  selectProduct(productName) {
    this.elements.product(productName).should("be.visible").click();
  }
}

export default new SearchPage();
