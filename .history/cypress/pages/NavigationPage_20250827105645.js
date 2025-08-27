class NavigationPage {
  verifyLinks() {
    const navLinks = [
      "OUR PRODUCTS",
      "SPECIAL OFFER",
      "POPULAR ITEMS",
      "CONTACT US",
    ];

    navLinks.forEach((link) => {
      cy.contains(link).click({ force: true });
      cy.wait(1000); // small wait so page loads
      cy.go("back"); // return to homepage
    });
  }
}

module.exports = new NavigationPage();
