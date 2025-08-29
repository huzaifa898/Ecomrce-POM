describe("Advantage Online Shopping API - Login", () => {
  const baseURL =
    "https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1";

  it("should login successfully with valid username and password", () => {
    cy.request("POST", `${baseURL}/login`, {
      loginUser: "user123456",
      loginPassword: "Qazwsx321@",
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.statusMessage.success).to.eq(true);
      cy.log("User ID:", res.body.statusMessage.userId);
    });
  });

  it("should fail login with invalid password", () => {
    cy.request({
      method: "POST",
      url: `${baseURL}/login`,
      failOnStatusCode: false,
      body: {
        loginUser: "user123456",
        loginPassword: "WrongPassword",
      },
    }).then((res) => {
      expect(res.status).to.eq(403);
      expect(res.body.statusMessage.success).to.eq(false);
      expect(res.body.statusMessage.reason).to.include(
        "Incorrect user name or password"
      );
    });
  });
});
