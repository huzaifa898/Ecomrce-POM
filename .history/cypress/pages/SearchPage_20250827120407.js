class SearchPage {
  elements = {
    searchIcon: () => cy.get('[name="mobile_search"]'),
    searchInput: () => cy.get("#autoComplete"), // actual input field
    product: (productName) => cy.contains(".productName", productName),
  };

  clickSearchIcon() {
    // wait until parent is visible OR force if permanently hidden
    this.elements
      .searchIcon()
      .should("exist")
      .then(($el) => {
        if ($el.is(":visible")) {
          cy.wrap($el).click();
        } else {
          // fallback: force click if hidden
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
