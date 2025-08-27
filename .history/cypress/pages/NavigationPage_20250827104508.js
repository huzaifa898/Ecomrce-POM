class NavigationPage {
  verifyLinks() {
    const navLinks = [
      { id: "#speakersLink", name: "SPECIAL OFFER" },
      { id: "#popular_items_link", name: "POPULAR ITEMS" },
      { id: "#contact_link", name: "CONTACT US" },
    ];

    navLinks.forEach((link) => {
      cy.get(link.id).click();
      cy.go("back"); // navigate back to homepage
    });
  }
}

module.exports = new NavigationPage();
