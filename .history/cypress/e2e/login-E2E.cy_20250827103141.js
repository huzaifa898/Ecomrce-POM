import LoginPage from "../pages/LoginPage";
import NavigationPage from "../pages/NavigationPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";

describe("Advantage Online Shopping - Full E2E Flow (POM)", () => {
  const user = {
    username: "user123456",
    password: "Qazwsx321@", // ⚠️ use already registered user
  };

  before(() => {
    cy.visit("/");
  });

  it("Login", () => {
    LoginPage.openLoginModal();
    LoginPage.login(user.username, user.password);
    LoginPage.verifyLogin(user.username);
  });

  it("Verify navigation links", () => {
    NavigationPage.verifyLinks();
  });

  it("Verify categories and all products", () => {
    HomePage.verifyCategories();
    HomePage.openAllProducts();
  });

  it("Add product to cart", () => {
    HomePage.openFirstProduct();
    ProductPage.addToCart();
  });

  it("Proceed to checkout", () => {
    CartPage.openCart();
    CartPage.verifyCart();
    CartPage.proceedToCheckout();
    CheckoutPage.completeCheckout();
  });

  it("Logout", () => {
    LoginPage.logout();
  });
});
