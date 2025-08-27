class NavigationPage {
  verifyLinks() {
    const navLinks = [
      { text: "OUR PRODUCTS" },
      { text: "SPECIAL OFFER" },
      { text: "POPULAR ITEMS" },
      { text: "CONTACT US" },
    ];

    navLinks.forEach((link) => {
      cy.contains("a", link.text).click({ force: true });
      cy.go("back"); // return to homepage
    });
  }
}

module.exports = new NavigationPage();
