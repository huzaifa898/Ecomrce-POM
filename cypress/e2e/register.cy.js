import RegisterPage from "../pages/RegistrationPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import LogoutPage from "../pages/LogoutPage";

describe("User Registration Test", () => {
  it(
    "should register a new user and add product to cart",
    { retries: 2 },
    () => {
      cy.visit("/#/");

      RegisterPage.clickUserIcon();
      RegisterPage.clickCreateNewAccount();

      const timestamp = Date.now();
      const username = `user${timestamp}`.slice(0, 15);
      const email = `user${timestamp}@test.com`;
      const password = "Test@1234";

      RegisterPage.enterUsername(username);
      RegisterPage.enterEmail(email);
      RegisterPage.enterPassword(password);
      RegisterPage.confirmPassword(password);
      RegisterPage.enterFirstName("Test");
      RegisterPage.enterLastName("User");
      RegisterPage.enterPhone("1234567890");
      RegisterPage.selectCountry("India");
      RegisterPage.enterCity("Mumbai");
      RegisterPage.enterAddress("123 Test Street");
      RegisterPage.enterPostalCode("400001");
      RegisterPage.acceptTerms();
      RegisterPage.clickRegister();

      cy.get("#menuUserLink > span", { timeout: 10000 }).should(
        "contain",
        username
      );

      HomePage.clickSpeakerHero();
      HomePage.clickSpecificSpeakerById("20");
      HomePage.clickSpecificSpeakerById("20");

      cy.url().should("include", "product");
      cy.get(".productName", { timeout: 10000 }).should("be.visible");

      ProductPage.addToCart();
      ProductPage.checkoutDirectlyFromMiniCart();

      // Logout after test
      LogoutPage.logout();
    }
  );
});
