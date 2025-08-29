describe("HTTP Requests", () => {
  it("GET Call", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("eq", 200);
  });

  it("POST Call", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
      title: "foo",
      body: "bar",
      userId: 1,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");
    });
  });

  it("PUT Call", () => {
    cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
      id: 1,
      title: "updated title",
      body: "updated body",
      userId: 1,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq("updated title");
    });
  });

  it("DELETE Call", () => {
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });
});
