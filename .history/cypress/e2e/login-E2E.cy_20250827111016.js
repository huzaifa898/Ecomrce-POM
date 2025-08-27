import LoginPage from "../pages/LoginPage";
import NavigationPage from "../pages/NavigationPage";

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

    NavigationPage.verifyLinks();
  });
});
