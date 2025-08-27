class SearchPage {
  elements = {
    searchIcon: () => cy.get("#menuSearch"), // or svg button id
    searchInput: () => cy.get('input[name="mobile_search"]'), // actual input box
    product: (productName) => cy.contains(".product-list-item", productName),
    // ^ replace `.product-list-item` with the actual class/selector for product cards in search results
  };

  clickSearchIcon() {
    this.elements.searchIcon().should("exist").click({ force: true });
  }

  typeSearch(productName) {
    this.elements.searchInput().should("be.visible").clear().type(productName);
  }

  selectProduct(productName) {
    this.elements.product(productName).should("be.visible").click();
  }
}

export default new SearchPage();
