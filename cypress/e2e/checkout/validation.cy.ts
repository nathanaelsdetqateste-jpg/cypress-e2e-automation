import { validCard } from "../../factories/card/cardFactory";

describe("Checkout validation", () => {
  beforeEach(() => {
    cy.login("loginUser");
    cy.visit("/");
  });

  describe("Negative scenarios", () => {
    it("ST-019 - Checkout with empty cart", () => {
      cy.contains("a", "Cart").click();
      cy.get(".text-center").find("b").should("contain.text", "Cart is empty!");
    });

    it("ST-020 - Checkout with invalid payment details", () => {
      cy.addProductToCart();
      cy.get(".btn.btn-default.check_out").should("be.visible").click();
      cy.url().should("include", "/checkout");
      cy.get(".active").should("contain.text", "Checkout").and("be.visible");

      cy.get(".form-control").type("Rua Teste, 123");
      cy.get('a[href="/payment"]').should("be.visible").click();

      cy.url().should("include", "/payment");
      cy.get('[data-qa="name-on-card"]').clear().type(123);
      cy.get('[data-qa="card-number"]').clear().type("teste");
      cy.get('[data-qa="cvc"]').clear().type("teste");
      cy.get('[data-qa="expiry-month"]').clear().type("teste");
      cy.get('[data-qa="expiry-year"]').clear().type("teste");
      cy.get('[data-qa="pay-button"]').click();

      cy.url().should("include", "/payment_done");
      cy.get("b")
        .should("not.contain.text", "Order Placed!")
        .and("not.be.visible");
      cy.get("p")
        .should(
          "not.contain.text",
          "Congratulations! Your order has been confirmed!",
        )
        .and("not.be.visible");
    });

    it("ST-021 - Checkout with missing shipping address", () => {
      cy.addProductToCart();

      cy.get(".btn.btn-default.check_out").should("be.visible").click();
      cy.url().should("include", "/checkout");
      cy.get(".active").should("contain.text", "Checkout").and("be.visible");

      cy.get("#ordermsg").should("be.visible");
      cy.get("a.btn.btn-default.check_out").should("be.visible").click();

      cy.url().should("include", "/payment");
      cy.get(".active").should("contain.text", "Payment").and("be.visible");
      cy.get('[data-qa="name-on-card"]').type(validCard().nameCard);
      cy.get('[data-qa="card-number"]').type(validCard().numberCard);
      cy.get('[data-qa="cvc"]').type(validCard().cvcCard);
      cy.get('[data-qa="expiry-month"]').type(
        validCard().expirationMonthCard.toString(),
      );
      cy.get('[data-qa="expiry-year"]').type(
        validCard().expirationYearCard.toString(),
      );
      cy.get('[data-qa="pay-button"]').click();

      cy.url().should("include", "/payment_done");
      cy.get("b")
        .should("not.contain.text", "Order Placed!")
        .and("not.be.visible");
      cy.get("p")
        .should(
          "not.contain.text",
          "Congratulations! Your order has been confirmed!",
        )
        .and("not.be.visible");
    });
  });
});
