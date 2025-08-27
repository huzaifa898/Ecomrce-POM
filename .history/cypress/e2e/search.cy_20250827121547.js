import LoginPage from "../pages/LoginPage";
import SearchPage from "../pages/SearchPage";

describe("Product Search Test (POM)", () => {
  const user = {
    username: "user123456",
    password: "Qazwsx321@",
  };

  beforeEach(() => {
    cy.visit("/#/");

    // login first
    LoginPage.openLoginModal();
    LoginPage.login(user.username, user.password);
    LoginPage.verifyLogin(user.username);
  });

  it("should search and select a product", () => {
    const productName = "SPEAKER";

    SearchPage.clickSearchIcon();
    SearchPage.typeSearch(productName);
    // SearchPage.selectProduct(productName);

    cy.url().should("include", "product");
  });
});
