import SearchPage from "../pages/SearchPage";
import LoginPage from "../pages/LoginPage"; // assuming you have one

describe("Search Product Flow", () => {
  beforeEach(() => {
    cy.visit("/"); // your base url
    LoginPage.login("testuser", "password123"); // login if needed
  });

  it("should search for a product", () => {
    SearchPage.clickSearchIcon();
    SearchPage.typeSearch("laptop");
    SearchPage.selectProduct("HP Laptop"); // adjust product name
  });
});
