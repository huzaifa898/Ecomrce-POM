class SearchPage {
  elements = {
    searchIcon: () => cy.get('[name="mobile_search"]'),
    searchInput: () => cy.get('[name="mobile_search"]'),
    product: (productName) => cy.contains(productName, { timeout: 10000 }), // ✅ looser selector
  };

  clickSearchIcon() {
    this.elements.searchIcon().click({ force: true });
  }

  typeSearch(productName) {
    this.elements
      .searchInput()
      .clear()
      .type(productName + "{enter}");
  }

  selectProduct(productName) {
    this.elements.product(productName).should("be.visible").click();
  }
}

export default new SearchPage();
