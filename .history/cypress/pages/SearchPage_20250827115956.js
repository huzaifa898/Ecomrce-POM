class SearchPage {
  elements = {
    searchIcon: () => cy.get("#menuSearch"),
    searchInput: () => cy.get("#autoComplete"),
    product: (productName) => cy.contains(".productName", productName),
  };

  clickSearchIcon() {
    // Try normal click, fallback to force if hidden
    this.elements.searchIcon().then(($el) => {
      if ($el.is(":visible")) {
        cy.wrap($el).click();
      } else {
        cy.wrap($el).click({ force: true });
      }
    });
  }

  typeSearch(productName) {
    this.elements.searchInput().should("be.visible").clear().type(productName);
  }

  selectProduct(productName) {
    this.elements.product(productName).should("be.visible").click();
  }
}

export default new SearchPage();
