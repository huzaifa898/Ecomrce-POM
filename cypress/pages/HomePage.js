class HomePage {
  // Step 1: Click on the Speakers category tab
  clickSpeakerHero() {
    cy.get("#speakersImg", { timeout: 10000 })
      .should("be.visible")
      .scrollIntoView()
      .click();
  }

  // Step 2: Click on a specific speaker product by ID (like id="20")
  clickSpecificSpeakerById(id = "20") {
    cy.get(`[id="${id}"]`, { timeout: 10000 })
      .should("be.visible")
      .scrollIntoView()
      .click();
  }
}

export default new HomePage();
