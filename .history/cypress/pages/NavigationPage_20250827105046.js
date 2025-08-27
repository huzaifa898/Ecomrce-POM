class NavigationPage {
  verifyLinks() {
    const navLinks = [
      { text: "SPECIAL OFFER" },
      { text: "POPULAR ITEMS" },
      { text: "CONTACT US" },
    ];

    navLinks.forEach((link) => {
      cy.contains("a", link.text).click(); // find <a> with text
      cy.go("back"); // navigate back
    });
  }

  verifyOurProductsSection() {
    cy.contains("OUR PRODUCTS").should("be.visible"); // verify heading exists
  }
}

module.exports = new NavigationPage();
