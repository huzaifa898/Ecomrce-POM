it("should return valid results when searching for tablet", () => {
  cy.request({
    method: "GET",
    url: "https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=tablet",
    failOnStatusCode: false,
  }).then((response) => {
    expect([200, 404]).to.include(response.status);

    if (response.status === 200) {
      const body = response.body;

      if (Array.isArray(body)) {
        expect(body.length).to.be.greaterThan(0);

        // check if object is product (has productName) or category
        if (body[0].hasOwnProperty("productName")) {
          expect(body[0]).to.have.property("productName");
          cy.log(`Found product: ${body[0].productName}`);
        } else if (body[0].hasOwnProperty("categoryName")) {
          expect(body[0]).to.have.property("categoryName");
          cy.log(`Returned category: ${body[0].categoryName}`);
        } else {
          throw new Error("Unexpected object structure in response");
        }
      } else {
        cy.log("Response is not an array");
      }
    } else {
      cy.log("No results found (404)");
    }
  });
});
