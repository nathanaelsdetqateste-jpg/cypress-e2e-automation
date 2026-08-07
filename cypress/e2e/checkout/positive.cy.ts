import { validCard } from "../../factories/card/cardFactory";

describe("Checkout", () => {
  beforeEach(() => {
    cy.login("loginUser");
    cy.visit("/");
  });
  describe("Positive scenarios", () => {
    it("ST-001 - Complete checkout with valid cart and payment successfully", () => {
      cy.get('a[href="/product_details/1"]')
        .should("contains.text", "View Product")
        .and("be.visible")
        .click();

      cy.get("h2").should("contains.text", "Blue Top").and("be.visible");

      cy.get(".btn.btn-default.cart").should("be.visible").click();

      cy.get("h4").should("contains.text", "Added!").and("be.visible");
      cy.get("p")
        .should("contain.text", "Your product has been added to cart.")
        .and("be.visible");
      cy.get('a[href="/view_cart"]')
        .find("u")
        .should("contain.text", "View Cart")
        .click();

      cy.url().should("include", "/view_cart");

      cy.get(".active")
        .should("contains.text", "Shopping Cart")
        .and("be.visible");

      let headersList = [
        "Item",
        "Description",
        "Price",
        "Quantity",
        "Total",
        "Action",
      ];

      for (const header of headersList) {
        cy.get("#cart_info").find(".cart_menu").should("contain.text", header);
        break;
      }
      cy.get(".btn.btn-default.check_out").should("be.visible").click();

      cy.url().should("include", "/checkout");
      cy.get(".active").should("contains.text", "Checkout").and("be.visible");
      cy.get(".step-one")
        .find("h2")
        .should("contain.text", "Address Details")
        .and("be.visible");
      cy.get(".step-one")
        .find("h2")
        .should("contain.text", "Review Your Order")
        .and("be.visible");
      cy.get(".form-control").type("Rua Teste, 123");
      cy.get('a[href="/payment"]').should("be.visible").click();

      cy.url().should("include", "/payment");
      cy.get(".active").should("contains.text", "Payment").and("be.visible");
      cy.get('[data-qa="name-on-card"').type(validCard().nameCard);
      cy.get('[data-qa="card-number"').type(validCard().numberCard);
      cy.get('[data-qa="cvc"').type(validCard().cvcCard);
      cy.get('[data-qa="expiry-month"').type(
        validCard().expirationMonthCard.toString(),
      );
      cy.get('[data-qa="expiry-year"').type(
        validCard().expirationYearCard.toString(),
      );
      cy.get('[data-qa="pay-button"').should("be.visible").click();

      cy.url().should("include", "/payment_done");
      cy.get("b").should("contains.text", "Order Placed!").and("be.visible");
      cy.get("p")
        .should(
          "contains.text",
          "Congratulations! Your order has been confirmed!",
        )
        .and("be.visible");
      cy.get('a[href="/download_invoice/500"]').should("be.visible").click();
      cy.readFile("cypress/downloads/invoice.txt").should("exist");
    });
  });
});
