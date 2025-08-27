class NavigationPage {
  verifyLinks() {
    const navLinks = [
      { id: "li:nth-child(7) a:nth-child(1)", name: "SPECIAL OFFER" },
      { id: "li:nth-child(6) a:nth-child(1)", name: "POPULAR ITEMS" },
      { id: "li:nth-child(5) a:nth-child(1)", name: "CONTACT US" },
    ];

    navLinks.forEach((link) => {
      cy.get(link.id).click();
      cy.go("back"); // navigate back to homepage
    });
  }
}

module.exports = new NavigationPage();
