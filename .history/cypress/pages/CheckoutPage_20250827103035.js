class CheckoutPage {
  completeCheckout() {
    cy.get("button#next_btn").click(); // shipping
    cy.get("button#pay_now_btn_SAFEPAY").click(); // SafePay
    cy.get(".orderPaymentSuccess").should("be.visible");
  }
}
module.exports = new CheckoutPage();
