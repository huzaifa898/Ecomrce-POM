class NavigationPage {
  verifyLinks() {
    const navLinks = [
      "OUR PRODUCTS",
      "SPECIAL OFFER",
      "POPULAR ITEMS",
      "CONTACT US",
    ];

    navLinks.forEach((link) => {
      cy.contains("a", link) // find anchor by text
        .scrollIntoView() // make sure it's visible
        .should("be.visible") // assert visibility
        .click();
      cy.go("back"); // go back to homepage
    });
  }
}

module.exports = new NavigationPage();
