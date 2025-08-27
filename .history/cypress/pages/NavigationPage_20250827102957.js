class NavigationPage {
  verifyLinks() {
    const navLinks = ["SPECIAL OFFER", "POPULAR ITEMS", "CONTACT US"];
    navLinks.forEach((link) => {
      cy.contains(link).click();
      cy.go("back");
    });
  }
}
module.exports = new NavigationPage();
