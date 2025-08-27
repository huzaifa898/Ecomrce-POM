class HomePage1 {
  // Navigate to home
  visit() {
    cy.visit("/");
  }

  // Open all products one by one
  openAllProducts() {
    // Scroll to products section (ensures it's in view)
    cy.get("#our_products").scrollIntoView();

    // Wait until products are rendered
    cy.get(".categoryRight li.product", { timeout: 10000 })
      .should("have.length.at.least", 1) // confirm products exist
      .each((_, index) => {
        // Click product by index (avoids detached DOM issues)
        cy.get(".categoryRight li.product").eq(index).click();

        // Assert product detail page opens
        cy.get(".productName", { timeout: 5000 }).should("be.visible");

        // Navigate back to product list
        cy.go("back");

        // Re-wait for products again after going back
        cy.get(".categoryRight li.product", { timeout: 10000 }).should(
          "have.length.at.least",
          1
        );
      });
  }
}

export default new HomePage1();
