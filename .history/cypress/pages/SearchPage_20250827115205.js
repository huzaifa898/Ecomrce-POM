class SearchPage {
  elements = {
    searchIcon: () =>
      cy.get(
        "body > header:nth-child(7) > nav:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > svg:nth-child(1)"
      ),
    searchInput: () => cy.get("#autoComplete"), // actual input field
    product: (productName) => cy.contains(".productName", productName),
  };

  clickSearchIcon() {
    this.elements.searchIcon().click();
  }

  typeSearch(productName) {
    this.elements.searchInput().should("be.visible").clear().type(productName);
  }

  selectProduct(productName) {
    this.elements.product(productName).should("be.visible").click();
  }
}

export default new SearchPage();
