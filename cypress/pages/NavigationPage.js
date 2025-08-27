class NavigationPage {
  verifyLinks() {
    const navLinks = [
      { text: "OUR PRODUCTS", section: "#our_products" },
      { text: "SPECIAL OFFER", section: "#special_offer" },
      { text: "POPULAR ITEMS", section: "#popular_items" },
      { text: "CONTACT US", section: "#contact_us" },
    ];

    navLinks.forEach((link) => {
      cy.contains(link.text).click({ force: true });
    });
  }
}

module.exports = new NavigationPage();
