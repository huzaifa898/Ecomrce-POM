import LoginPage from "../pages/LoginPage";
import NavigationPage from "../pages/NavigationPage";
import HomePage1 from "../pages/HomePage1";
import ProductPage1 from "../pages/ProductPage1";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";

describe("Advantage Online Shopping - Full E2E Flow (POM)", () => {
  const user = {
    username: "user123456",
    password: "Qazwsx321@", // ⚠️ use already registered user
  };

  before(() => {
    cy.visit("/#/");
  });

  it("Login", () => {
    LoginPage.openLoginModal();
    LoginPage.login(user.username, user.password);
    LoginPage.verifyLogin(user.username);
  });

  //   it("Verify navigation links", () => {
  //     NavigationPage.verifyLinks();
  //   });

  //   it("Verify categories and all products", () => {
  //     HomePage1.verifyCategories();
  //     HomePage1.openAllProducts();
  //   });

  //   it("Add product to cart", () => {
  //     HomePage1.openFirstProduct();
  //     ProductPage1.addToCart();
  //   });

  //   it("Proceed to checkout", () => {
  //     CartPage.openCart();
  //     CartPage.verifyCart();
  //     CartPage.proceedToCheckout();
  //     CheckoutPage.completeCheckout();
  //   });

  //   it("Logout", () => {
  //     LoginPage.logout();
  //   });
});
