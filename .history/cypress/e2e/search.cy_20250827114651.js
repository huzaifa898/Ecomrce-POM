import LoginPage from "../pages/LoginPage";
import SearchPage from "../pages/SearchPage";

describe("Search Product Flow", () => {
  const user = {
    username: "user123456",
    password: "Qazwsx321@", // already registered user
  };

  beforeEach(() => {
    // Visit and login before each test
    cy.visit("/#/");
    LoginPage.openLoginModal();
    LoginPage.login(user.username, user.password);
    LoginPage.verifyLogin(user.username);
  });

  it("should search for a product successfully", () => {
    const productName = "HP Speaker"; // change to a real product in your DB

    // Search for product
    SearchPage.searchProduct(productName);

    // Verify product is displayed
    SearchPage.verifyProductVisible(productName);
  });
});
