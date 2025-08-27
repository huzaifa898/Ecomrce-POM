class SearchPage {
  elements = {
    searchIcon: () => cy.get("a[title='SEARCH'] svg path"),
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
