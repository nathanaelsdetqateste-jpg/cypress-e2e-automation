import { fillPaymentForm } from "../../support/helpers/PaymentHelper";
import { validCard } from "../../factories/card/cardFactory";

describe("validation", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.login("loginUser");
    cy.visit("/");
  });

  describe("Negative scenarios", () => {
    it("ST-001 - Checkout with invalid payment details", () => {
      cy.AddToCart();
      cy.get(".btn.btn-default.check_out").should("be.visible").click();
      cy.url().should("include", "/checkout");

      cy.get(".form-control").type("Test Address");
      cy.get(".btn.btn-default.check_out").click();

      cy.get('[data-qa="name-on-card"]').type("Test User");
      cy.get('[data-qa="card-number"]').type("0000 0000 0000 0000");
      cy.get('[data-qa="cvc"]').type("123");
      cy.get('[data-qa="expiry-month"]').type("12");
      cy.get('[data-qa="expiry-year"]').type("2030");
      cy.get('[data-qa="pay-button"]').click();

      cy.get('[data-qa="pay-button"]').should("be.visible").click();

      cy.url().should("not.include", "/payment_done");
      cy.get("b")
        .should("not.contains.text", "Order Placed!")
        .and("not.be.visible");
      cy.get("p")
        .should(
          "not.contains.text",
          "Congratulations! Your order has been confirmed!",
        )
        .and("not.be.visible");
    });
  });

  it("ST-002 - Checkout with missing shipping address", () => {
    cy.AddToCart();
    cy.get(".btn.btn-default.check_out").should("be.visible").click();
    cy.url().should("include", "/checkout");

    cy.get(".form-control").clear();
    cy.get(".btn.btn-default.check_out").click();
  });

  const requiredFields = [
    {
      name: "card name",
      skip: "cardName",
      selector: '[data-qa="name-on-card"]',
    },

    {
      name: "card number",
      skip: "cardNumber",
      selector: '[data-qa="card-number"]',
    },

    {
      name: "cvc card",
      skip: "cardCvc",
      selector: '[data-qa="cvc"]',
    },

    {
      name: "expiry month",
      skip: "expiryMonth",
      selector: '[data-qa="expiry-month"]',
    },

    {
      name: "expiry year",
      skip: "expiryYear",
      selector: '[data-qa="expiry-year"]',
    },
  ];
  for (const field of requiredFields) {
    it.only(`ST-003 - should show error message when ${field.name} field is empty`, () => {
      const card = validCard();

      cy.AddToCart();
      cy.get(".btn.btn-default.check_out").should("be.visible").click();
      cy.url().should("include", "/checkout");

      cy.get(".form-control").type("test");
      cy.get(".btn.btn-default.check_out").should("be.visible").click();

      fillPaymentForm(card, [field.skip]);
      cy.get('[data-qa="pay-button"]').should("be.visible").click();

      cy.validationMessageError(field.selector);
    });
  }
});
