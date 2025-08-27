class NavigationPage {
  verifyLinks() {
    const navLinks = [
      { text: "SPECIAL OFFER" },
      { text: "POPULAR ITEMS" },
      { text: "CONTACT US" },
    ];

    navLinks.forEach((link) => {
      cy.contains(link.text).click({ force: true }); // works for span/div too
      cy.wait(1000); // small wait for page transition
      cy.go("back");
    });
  }

  verifyOurProductsSection() {
    cy.contains("OUR PRODUCTS").should("be.visible");
  }
}

module.exports = new NavigationPage();
