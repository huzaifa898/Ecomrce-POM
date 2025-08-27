class SearchPage {
  // locator for search bar
  get searchInput() {
    return cy.get("input[name='search']"); // update selector as per your app
  }

  get searchButton() {
    return cy.get("#searchBtn"); // update selector if needed
  }

  get productList() {
    return cy.get(".product"); // update selector
  }

  searchProduct(productName) {
    this.searchInput.clear().type(productName);
    this.searchButton.click();
  }

  verifyProductVisible(productName) {
    this.productList.contains(productName).should("be.visible");
  }
}

export default new SearchPage();
