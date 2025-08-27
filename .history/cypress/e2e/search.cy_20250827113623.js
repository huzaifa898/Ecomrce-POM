import LoginPage from "../pages/LoginPage";
import LogoutPage from "../pages/LogoutPage";

describe(
  "Advantage Online Shopping - Search Flow with vaild login",
  { retries: { runMode: 2, openMode: 1 } },
  () => {
    const user = {
      username: "user123456",
      password: "Qazwsx321@", //use already registered user
    };

    before(() => {
      cy.visit("/#/");
    });

    it(
      "Login and Complete Flow",
      { retries: { runMode: 2, openMode: 1 } },
      () => {
        // Login
        LoginPage.openLoginModal();
        LoginPage.login(user.username, user.password);
        LoginPage.verifyLogin(user.username);

        // Logout
        LogoutPage.logout();
      }
    );
  }
);
